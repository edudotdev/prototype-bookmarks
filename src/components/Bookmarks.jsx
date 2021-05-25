import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Bookmarks() {
  const [star, setStar] = useState('far fa-star')

  const handleclick = e => {

    if(star === 'far fa-star') {

      setStar('fas fa-star')
      e.target.className = 'amarillo'
      e.target.children[0].className = 'fas fa-star'
    } else {
      setStar('far fa-star')
      e.target.className = 'gris'
      e.target.children[0].className = 'far fa-star'
    }
  }

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
      <p>bookmarks</p>
    </div>
    <div class="body_card2">
      <div class="url_bookmark">
        <input class="url" type="text" value="https://adal.dev/"/>
        
        <div class="center_icon">
          <Link to="/edit">
            <svg width="19" height="24" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C14.6569 0 16 1.34315 16 3V19C16 19.8544 14.9979 20.3153 14.3492 19.7593L8 14.3171L1.65079 19.7593C1.00212 20.3153 0 19.8544 0 19V3C0 1.34315 1.34315 0 3 0H13ZM13 2H3C2.44772 2 2 2.44772 2 3V16.8258L7.34921 12.2407C7.7237 11.9198 8.2763 11.9198 8.65079 12.2407L14 16.8258V3C14 2.44772 13.5523 2 13 2ZM8 4C8.55229 4 9 4.44772 9 5V6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8H9V9C9 9.55229 8.55229 10 8 10C7.44772 10 7 9.55229 7 9V8H6C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6H7V5C7 4.44772 7.44772 4 8 4Z" fill="#2F3542"/>
            </svg>
          </Link>
        </div>
          
      </div>

        <form class="search" action="">
          <select name="" id="">
            <option value="">--select--</option>
            <option value="bookmarks">Bookmarks</option>
            <option value="tags">Tags</option>
          </select>
          <input type="text" placeholder="search bookmarks/tags"/>
        </form>

        <div class="list_bookmarks">
          <div class="bookmarks">
            <div class="bookmarks_data">
              <p class="bookmarks_data_title">Portafolio</p>
              <a href="https://adal.dev/">https://adal.dev/</a>
              <div class="bookmarks_data_tags">
                <a href="#" class="tag">css</a>
                <a href="#" class="tag">html</a>
                <a href="#" class="tag">javascript</a>
              </div>
              <div class="bookmarks_author">
                <i class="fas fa-user-alt"></i>
                adalberto
              </div>
            </div>
            <div class="bookmarks_options">
              <button class='gris' onClick={handleclick}><span class='far fa-star'></span></button>
            </div>
          </div>
          <div class="bookmarks">
            <div class="bookmarks_data">
              <p class="bookmarks_data_title">W3SCHOOLS</p>
              <a href="https://www.w3schools.com/">https://www.w3schools.com/</a>
              <div class="bookmarks_data_tags">
                <a href="#" class="tag">css</a>
                <a href="#" class="tag">html</a>
                <a href="#" class="tag">javascript</a>
                <a href="#" class="tag">php</a>
                <a href="#" class="tag">c#</a>
              </div>
              <div class="bookmarks_author">
                <i class='fas fa-user-alt'></i>
                EduardoRL
              </div>
            </div>
            <div class="bookmarks_options">
              <button class='gris' onClick={handleclick}><span class='far fa-star'></span></button>
            </div>
          </div>
          <div class="bookmarks">
            <div class="bookmarks_data">
              <p class="bookmarks_data_title">Linkedin</p>
              <a href="https://www.w3schools.com/">https://www.linkedin.com/</a>
              <div class="bookmarks_data_tags">
                <a href="#" class="tag">css</a>
                <a href="#" class="tag">html</a>
                <a href="#" class="tag">javascript</a>
                <a href="#" class="tag">php</a>
                <a href="#" class="tag">c#</a>
              </div>
              <div class="bookmarks_author">
                <i class="fas fa-user-alt"></i>
                Jelty
              </div>
            </div>
            <div class="bookmarks_options">
              <button class='gris' onClick={handleclick}><span class='far fa-star'></span></button>
            </div>
          </div>
          <div class="bookmarks">
            <div class="bookmarks_data">
              <p class="bookmarks_data_title">github</p>
              <a href="https://www.w3schools.com/">https://github.com/home</a>
              <div class="bookmarks_data_tags">
                <a href="#" class="tag">css</a>
                <a href="#" class="tag">html</a>
                <a href="#" class="tag">javascript</a>
                <a href="#" class="tag">php</a>
                <a href="#" class="tag">c#</a>
              </div>
              <div class="bookmarks_author">
                <i class="fas fa-user-alt"></i>
                Jesus
              </div>
            </div>
            <div class="bookmarks_options">
              <button class='gris' onClick={handleclick}><span class='far fa-star'></span></button>
            </div>
          </div>
          <div class="bookmarks">
            <div class="bookmarks_data">
              <p class="bookmarks_data_title">Google Fonts</p>
              <a href="https://www.w3schools.com/">https://fonts.google.com/</a>
              <div class="bookmarks_data_tags">
                <a href="#" class="tag">css</a>
                <a href="#" class="tag">html</a>
                <a href="#" class="tag">javascript</a>
                <a href="#" class="tag">php</a>
                <a href="#" class="tag">c#</a>
              </div>
              <div class="bookmarks_author">
                <i class="fas fa-user-alt"></i>
                CR7
              </div>
            </div>
            <div class="bookmarks_options">
              <button class='gris' onClick={handleclick}><span class='far fa-star'></span></button>
            </div>
          </div>
        </div>

    </div>
  </div>
  )
}
