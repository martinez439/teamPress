/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { IoIosPeople } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          
        }}
      >
        <main>{children}</main>
        
        <footer className="footer">
         
        <div className="content has-text-centered">
          <div className="columns">
            <div className="column">
        <p>
        <strong>Sanatto</strong> Solutions <a>www.librettoh.com</a>
        </p>
        </div>
        <div className="column">
        © {new Date().getFullYear()}, Built by Mike
        </div>
        <div className="column">
          <h1> Find us on Social Media</h1>
        </div>
        <div className="column">
          <h1 className="is-size-1">
        
        <IoLogoTwitter />
        </h1>
        </div>
        
        
        </div>
        </div>
          </footer>

       
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
