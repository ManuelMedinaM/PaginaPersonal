import {graphql,useStaticQuery} from 'gatsby';

const useSeo = ()=>{
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
      )
    return site.siteMetadata;
}


export default useSeo;