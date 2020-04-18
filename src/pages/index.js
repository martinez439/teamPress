import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import { IoIosPeople } from "react-icons/io";
import AmSpring from '../components/animation';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/mystyles.scss"

export const fragment = graphql`
{
  wordPress {
    teamMembers {
      edges {
        node {
          id
          title
          profileFields {
            bio
            fieldGroupName
            github
            title
            twitter
            website
            photo {
              sourceUrl
            }
          }
        }
      }
    }
  }
}

`;

const IndexPage = ({data}) => (
 

  <Layout>

{console.log(data)}
    

    <SEO title="Home" />

    
 
    <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1
              className="is-size-1"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 800,
                paddingBottom:".4rem"
              }}
            >
              We are a <span style={{color:'#28b4d7'}}>Team</span>.
            
            </h1>
            <h2
              className="is-size-4"
              style={{
                marginBottom: '.2rem',
                color: '#4a4a4a',
                fontWeight: 400,
              }}
            >
              Consultants that shift your business, across all sectors.
            </h2>
          </div>
          <AmSpring />
        </div>
      </section>

   
      <div></div>
  

      
    <div className="container">
    <div className="columns is-multiline is-8">

              
    {data.wordPress.teamMembers.edges.map( teamMember => (
      <div key={teamMember.node.id} className="column is-half-desktop is-half-tablet is-full-mobile is-one-quarter-fullhd">
         <div className="box">
         <article class="media">
         <div class="media-left">
       <figure class="image is-64x64">
         <img
          src={teamMember.node.profileFields.photo.sourceUrl}
          alt={teamMember.node.profileFields.photo.altText}
        />
        </figure>
        </div>
        
        <div class="media-content">
      <div class="content">
         <h2 class="title">
         {teamMember.node.title}
       </h2>
       <p class="subtitle" style={{
         color: 'gray'
       }}>
         {teamMember.node.profileFields.title}
       </p>
  
       {teamMember.node.profileFields.bio}
       <IoIosPeople />
      </div>
      </div>
      </article>
        </div>
      </div>
   ))}

      

      </div>
      </div>
    
      <br></br>
      

    
    
    
  </Layout>
            )

export default IndexPage
