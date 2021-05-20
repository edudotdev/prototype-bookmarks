import React from 'react'
import { Link } from 'react-router-dom'

export default function Edit() {
  return (
    <div class="frame">
    <div class="header_card"> 
      <div class="header_custom">
        <span class="username">adalberto</span>

        <ul class="navbar_nav">
          <li class="nav_item has_dropdown">
            <a href="#"><i class="fas fa-ellipsis-v"></i></a>
            <div class="dropdown">
              
              <Link to="/bookmarks">bookmarks</Link>
              <Link to="/tags">tags</Link>
              <a href="#">import Bookmarks</a>
              <a href="#">Export Bookmarks</a>
              <Link to="/">log out</Link>
                
            </div>
          </li>
        </ul>
        
      </div>
    </div>
    <div class="title_interfaze">
      <p>edit</p>
    </div>
    <div class="body_card2">
      <form class="search_tag" action="">
        <input type="text" placeholder="title bookmark"/>
      </form>
      
      <div class="url_bookmark edit">
        <input class="url" type="text" placeholder="url" value="https://adal.dev/"/> 
      </div>
      
      <h2 class="tt">tags</h2>
      <div className="tagzzz">
        <div class="bookmarks_data_tags">
          <a href="#" class="tag pp">css <i class="fas fa-ban"></i></a>
          <a href="#" class="tag pp">html <i class="fas fa-ban"></i></a>
          <a href="#" class="tag pp">javascript <i class="fas fa-ban"></i></a>
          <a href="#" class="tag pp">php <i class="fas fa-ban"></i></a>
          <a href="#" class="tag pp">c# <i class="fas fa-ban"></i></a>
        </div>
        <form class="search_tag edit" action="">
          <input type="text" placeholder="tags"/>
        </form>
      </div>
      <form class="form_singup" action="">
        <Link to="/bookmarks" class="btn_register pap">Submit</Link>
      </form>
    </div>
  </div>
  )
}
