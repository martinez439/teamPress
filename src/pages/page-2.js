import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';



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

const SecondPage = ({ data }) => (
<>

     {console.log(data)}

     {data.wordPress.teamMembers.edges.map( teamMember => (
       <div key={teamMember.node.id}>
          <h2>
          {teamMember.node.title}
        </h2>
        <img
          src={teamMember.node.profileFields.photo.sourceUrl}
         
        />
       </div>
     ))}
        
        
        
      
    
       <Link to="/">Go back to the homepage</Link>
      </>
    


);




export default SecondPage
