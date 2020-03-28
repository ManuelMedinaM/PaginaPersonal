import React from 'react';
import {useStaticQuery,graphql} from 'gatsby'
import { ContenedorEmoji } from '../ui/imgenesAnimadas';

const ContenedorEmojis = () => {
    
    const imagen = useStaticQuery(graphql`
      query MyQueryEmoji{
        image1: file(relativePath: {eq: "luna.png"}) {
          childImageSharp {
            fluid(maxHeight: 50, maxWidth: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: {eq: "saturno.png"}) {
          childImageSharp {
            fluid(maxHeight: 50, maxWidth: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: {eq: "tierra.png"}) {
          childImageSharp {
            fluid(maxHeight: 50, maxWidth: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
       
    `)
    console.log(imagen)


    return (
        <>
            <ContenedorEmoji
                fluid={imagen.image1.childImageSharp.fluid}
                norte='15%'
                oeste='2%'
            />
            <ContenedorEmoji
                fluid={imagen.image2.childImageSharp.fluid}
                norte='38%'
                oeste='10%'
            />
            <ContenedorEmoji
                fluid={imagen.image3.childImageSharp.fluid}
                sur='17%'
                oeste='4%'
            />
        </>
    );
};

export default ContenedorEmojis;