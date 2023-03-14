import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';



const Create = () => {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const[name,setName]= useState()
  const[category,setCategory]= useState()
  const[price,setPrice]= useState()
  const[image,setImage]= useState()
  const date = new Date()
  const handleSubmit =()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
    })

    
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fcate"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number" 
             id="fprice"
             value={price}
             onChange={(e)=> setPrice(e.target.value)}
             name="Price" />
            <br />
          </form>
          <br />
          {image && <img alt='images' width="200px" height="200px" src={image ? URL.createObjectURL(image) : null}></img>}
          
            <br />
            <input onChange={(e)=>{
                setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
