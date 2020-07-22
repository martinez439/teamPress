import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../images/sanatto.png"
import { slide as Menu } from 'react-burger-menu'



function handleClick(e) {
  e.preventDefault();
  let toggle = document.querySelector(".navbar-burger"); 
  let menu = document.querySelector(".navbar-menu"); 
  toggle.classList.toggle("is-active"); 
  menu.classList.toggle("is-active");
  console.log('The link was clicked.');
}

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="navbar is-dark"
    style={{
      background: `rgb(74, 74, 74)`, 
    }}
  >
    <div className="navbar-brand">
      <div className="navbar-start">
      <a className="navbar-item"><img src={Image} width="132" height="28" alt="A dog smiling in a party hat" /></a> 
    </div>
      <a onClick={handleClick} 
      className="navbar-burger" 
      aria-label="menu" 
      aria-expanded="true">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      
      </a>

   
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
      <a className="navbar-item" style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: 'black'
      }}>
      
          <nav className="breadcrumb">
            <ul >
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `.2rem`,
                    fontWeight: `bold`
                    
                  }}
                >
                  <Link style={{ color: `rgb(40, 180, 215` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </a>
        </div>
        </div>

        
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
