import React from 'react';
import {useStaticQuery,graphql} from 'gatsby'
import { ContenedorEmoji } from '../ui/imgenesAnimadas';

const ContenedorEmojis = () => {
    
    const imagen = useStaticQuery(graphql`
      query MyQueryEmoji {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          nodes {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
          
    `)


    return (
        <>
            <ContenedorEmoji
                fluid={imagen.allFile.nodes[1].childImageSharp.fluid}
                norte='15%'
                oeste='2%'
            />
            <ContenedorEmoji
                fluid={imagen.allFile.nodes[4].childImageSharp.fluid}
                norte='38%'
                oeste='10%'
            />
            <ContenedorEmoji
                fluid={imagen.allFile.nodes[3].childImageSharp.fluid}
                sur='17%'
                oeste='4%'
            />
        </>
    );
};

export default ContenedorEmojis;