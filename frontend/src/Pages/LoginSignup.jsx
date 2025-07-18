import React from 'react'
import './CSS/loginsignup.css'


export default function LoginSignup() {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password' />
        </div>
        <button className='loginsignup-btn'>Sign Up</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>

        </div>
      </div>
      
    </div>
  )
}
