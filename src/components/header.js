import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../images/sanatto.png"

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
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
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
        alignItems: 'flex-end'
      }}>
      
          <nav className="breadcrumb">
            <ul >
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `.2rem`,
                    
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
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
