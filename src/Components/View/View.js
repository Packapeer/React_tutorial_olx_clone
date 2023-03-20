import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]= useState()
  const {postDetails} = useContext(PostContext)
  const [posts,setposts]= useState(postDetails)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    setposts(postDetails)
    const {userId} = posts
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })


  },[])

  return (
   
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={posts?.url}
          alt="product_image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>Price:  &#x20B9; {posts?.price} </p>
          <span>Item Name: {posts?.name}</span>
          <p>Category: {posts?.category}</p>
          <span>Posted on: {posts?.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>User: {userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>}
      </div>
    </div>

  );
}
export default View;
