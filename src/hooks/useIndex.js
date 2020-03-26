import {graphql,useStaticQuery} from 'gatsby';

const useIndex = ()=>{
    const datos = useStaticQuery(
        graphql`
        query{
            strapiPagina(slug: {eq: "index"}) {
              slug
              titulo
              desc
              id
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          
        `
      )
    return datos;
}


export default useIndex;