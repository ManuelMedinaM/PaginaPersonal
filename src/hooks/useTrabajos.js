import {graphql,useStaticQuery} from 'gatsby';

const useTrabajos = ()=>{

    const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiTrabajo(filter: {slug: {eq: "estatico"}}) {
        edges {
          node {
            descripcion
            herramienta1
            herramienta2
            herramienta3
            herramienta4
            herramienta5
            herramienta6
            herramienta7
            id
            imagen {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta1 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta2 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta3 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta4 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta5 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta6 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgHerramienta7 {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            url
            titulo
          }
        }
      }
    }
    
    

    `)

    // colocar el destructuring del objeto con los trabajos en el 
    return data.allStrapiTrabajo.edges.map(dato=>({
      datos:{
        id: dato.node.id,
        titulo: dato.node.titulo,
        herramientas:[
            dato.node.herramienta1,
            dato.node.herramienta2,
            dato.node.herramienta3,
            dato.node.herramienta4,
            dato.node.herramienta5,
            dato.node.herramienta6,
            dato.node.herramienta7,
        ],

        imgaenesHerramientas: [
          dato.node.imgHerramienta1,
          dato.node.imgHerramienta2,
          dato.node.imgHerramienta3,
          dato.node.imgHerramienta4,
          dato.node.imgHerramienta5,
          dato.node.imgHerramienta6,
          dato.node.imgHerramienta7      
        ],
        Descripcion:dato.node.descripcion,
        url:dato.node.url,
      },
      imagenPrincipal: dato.node.imagen.childImageSharp.fluid
    }));


}

export default useTrabajos;