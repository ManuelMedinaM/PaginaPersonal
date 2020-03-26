import {graphql,useStaticQuery} from 'gatsby';

const usePortafolio = ()=>{
    const datos = useStaticQuery(
        graphql`
        query {
            strapiPagina(slug: {eq: "portafolio"}) {
              titulo
              desc
              id
            }
          }
          
          
        `
      )
    return datos;
}


export default usePortafolio;