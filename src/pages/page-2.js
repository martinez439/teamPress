import React from 'react'
import Link from 'gatsby-link'
import "../components/mystyles.scss"
import Layout from '../components/layout'
import { IoIosSend } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import ContactImg from '../components/image2'
import {Spring} from 'react-spring/renderprops'



const SecondPage = () => (

  <Layout>
  <div>



    <div className="container">
    <div className="columns is-centered">
     
    <div className="column is-half">
    <div className="card is-centered contact has-text-centered">
     <header className="card-header">
     <Spring
      from={{ opacity: 0, marginTop: -300 }}
      to={{ opacity: 1, marginTop: 0 }}>
      {props => <div style={props}>
      <p className="card-title is-centered is-size-4 is-italic has-text-white has-text-centered has-text-weight-semibold">
            <span className="is-size-5"><FaQuoteLeft /> </span>
            How can we help? <span className=" is-size-5"> 
            <FaQuoteRight /></span>
            </p>
         </div>}
      </Spring>
        </header>
        <Spring
      from={{ opacity: 0.1 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}>
      {props => <div style={props}>
      <div className="contactImage">
      <figure className="image is-128x128 is-inline-block" 
      >
        <ContactImg />
      </figure>
      </div>
      </div>}
      </Spring>
      <div className="card-content">
      <div className="field">
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          
          <p>
            <label className="label"><input className="input" type="text" name="name" placeholder="Name"/></label>
          </p> 
          <br></br>
          <p>
            <label className="label"><input className="input" type="email" name="email" placeholder="Email"/></label>
          </p>
          <br></br>
          <p>
            <label className="label"><textarea className="textarea" name="message" placeholder="A detailed message"></textarea></label>
          </p>
          
          <br></br>
          <div className="columns">
          <div className="column has-text-centered">
          <button class="button is-medium is-info is-outlined">Send <IoIosSend /></button>
          </div>
          </div>
          </form>
          </div>
          
    </div>
         
  </div>
  
  </div>
  
  </div>
  </div>
  </div>
  </Layout>
)

export default SecondPage
