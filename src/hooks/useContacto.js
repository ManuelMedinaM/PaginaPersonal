import {graphql,useStaticQuery} from 'gatsby';

const useContacto = ()=>{
    // const resultado = new Object;
    const datos = useStaticQuery(
        graphql`
      query contacto{
        dato: strapiPagina(slug: {eq: "contacto"}) {
              titulo
              desc
              id
            }
        imagenes: allFile(filter: {sourceInstanceName: {eq: "social"}}) {
            images: nodes {
              childImageSharp {
                fluid(maxHeight: 50, maxWidth: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
           }        
        `
  )
  const {dato:{titulo,desc},imagenes:{images}} = datos;
  let resultado = new Array();

  desc.split('\n').map((parrafo,index)=>{
    let indice = parrafo.split(' ').length-3;
    let pClave =parrafo.split(' ')[indice];
    let objInsert = {};
    objInsert.parrafo=parrafo;
    images.forEach(img => {
      if (img.childImageSharp.fluid.srcSet.indexOf(pClave)!==-1){
        objInsert.src= img.childImageSharp.fluid
      }
    })
    resultado=[...resultado,objInsert];
  })

  return {resultado,titulo};
}


export default useContacto;