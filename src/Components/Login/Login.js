import React, { useContext,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';

function Login() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/')
    }).catch((error)=>{
alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img alt='img' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email" 
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lpass"
            name="password"
       
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
