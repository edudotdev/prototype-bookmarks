import React from 'react'
import { Link } from 'react-router-dom';

export default function Tags() {
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
      <p>tags</p>
    </div>
    <div class="body_card2">
      <form class="search_tag" action="">
        <input type="text" placeholder="search tags"/>
      </form>
      <div class="list_tags">
        <div class="tag">
          <span>css</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>html</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>bootstrap 5</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>php</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>jquery</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>javascript</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>c#</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="tag">
          <span>shopify</span>
          <div class="bookmarks_options">
            <ul class="navbar_nav">
              <li class="nav_item has_dropdown">
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                <div class="dropdown bookmarks_options_dropdown">
                  
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                    
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
