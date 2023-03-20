import React, { useState,useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername]= useState('')
  const [email,setEmail]= useState('')
  const [phone,setPhone]= useState('')
  const [password,setPassword]= useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
       firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
       }).then(()=>{
        history.push("/login")
       }).catch((error)=>{
        alert(error.message)
       }) 
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img alt='img' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="femail"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lphone"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
