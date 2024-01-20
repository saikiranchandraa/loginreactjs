import image from "./login.png";
import {React } from "react";
import "./Login.css";
import { useState } from 'react';

const Login =()=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
    // Function to handle login button click
    const handleLoginClick = () => {
        if(username === "saikiran12" && password === "abcdefgh"){
          alert("Login sucessful!");
        }
        else{
          alert("Incorrect details");
        }
    
      // Add your login logic here
    };
  
    // Function to handle Facebook button click
    const handleFacebookLoginClick = () => {
      alert("Login with Facebook clicked!");
      // Add your Facebook login logic here
    };
  
    // Function to handle Gmail button click
    const handleGoogleLoginClick = () => {
      alert("Login with Gmail clicked!");
      // Add your Gmail login logic here
    };
  

  return(
    <div className="container">
      <div className="background">
       {/* <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>  */}
   
      <div className="card">
        
    
      <div className="heading-app">
        
         <h1 style={{marginTop:"10px", marginBottom:"0px"}}>friender</h1>
      </div>
      
        <p className="app-caption" style={{fontSize:"15px", marginTop:"12px"}}>Connect with friends, follow passions, sign up now!</p>
      
      
      <div className="form">
        <input   type="text" placeholder="Phone number, username, or email"  value={username}
            onChange={(e) => setUsername(e.target.value)}  required/>
        <input type="password" placeholder="Password"  value={password}
            onChange={(e) => setPassword(e.target.value)} required/>
       
        <button className="login-button" onClick={handleLoginClick}  >Log In</button>
        <a style={{paddingTop:"0px"}} href="#" className="forgot-password">Forgot Password?</a>
        <div style={{marginTop:"0px", marginBottom:"5px"}} className="or-divider">
          <span className="or-text">OR</span>
        </div>
        <button  style={{marginTop:"7px"}}className="facebook-button" onClick={handleFacebookLoginClick}>Log In with Facebook</button>
        <button style={{marginTop:"0px"}} className="gmail-button" onClick={handleGoogleLoginClick} >Log In with Gmail</button>
      </div>
      <div className="signup" style={{paddingTop:"0px"}}>
        Don't have an account? <a href="SignUp" className="signup-link">Sign up</a>
      </div>
      </div>
    </div>
  </div>

  )
}
export default Login;