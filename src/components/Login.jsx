import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="frame">
      <div className="header_card">
        <div className="logo">
          Logo
        </div>
      </div>
      <div className="body_card">
        <h2 className="title">Sign in</h2>
        <form className="form_singup" action="">
          
          <div>
            <span className="fas fa-at"></span>
            <input type="email" placeholder="e-mail"/>
          </div>

          <div>
            <span className="fas fa-lock"></span>
            <input type="password" placeholder="password"/>
          </div>

          <Link to="/bookmarks" className="btn_register">Login</Link>
          <Link to="/register" className="yatengocuenta">No tengo cuenta</Link>
        </form>

      </div>
    </div>
  )
}
