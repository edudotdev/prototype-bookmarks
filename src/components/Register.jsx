import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div class="frame">
    <div class="header_card">
      <div class="logo">
        Logo
      </div>
    </div>

    <div class="body_card">
      <h2 class="title">Sign up</h2>

      <form class="form_singup" action="">
        
        <div>
          <span class="far fa-user"></span>
          <input type="text" placeholder="username"/> 
        </div>
        <div>
          <span class="fas fa-at"></span>
          <input type="email" placeholder="e-mail"/>
        </div>
        
        <div>
          <span class="fas fa-lock"></span>
          <input type="password" placeholder="password"/>
        </div>
        
        <div>
          <span class="fas fa-lock"></span>
          <input type="password" placeholder="confirm password"/>
        </div>

        <Link to="/bookmarks" class="btn_register">Register</Link>
        <Link to="/" className="yatengocuenta">Ya tengo cuenta</Link>
      </form>
    </div>
 
  </div>
  )
}
