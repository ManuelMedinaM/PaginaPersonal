import React from "react"
import {css} from '@emotion/core'
import useIndex from "../hooks/useIndex"

import { SeparadorMorado } from "../ui/separador"
import { ImgIndex } from "../components/imagenIndex"

const IndexPage = () => {
  const {strapiPagina:{desc,titulo,img:{childImageSharp:{fluid}}}} = useIndex();
  return(
    <>
      <div css={css`
          display:grid;
          grid-Template-Columns: 1fr 1fr;
          grid-template-rows: auto;
          text-Align:center; 
          padding: 2rem 8rem;
          row-Gap:3rem; 

          @media(max-Width:800px) {
            padding: 0rem 3rem;
            grid-Template-Columns: 1fr;
            grid-template-rows: auto;  
          }  
      `}>
      <h1
        css={css`
          align-Self: center;
          line-height: 80px;
        
        `}
      >{titulo}
        <SeparadorMorado
          css={css`margin: 0 auto;`} 
        />
      </h1>
      <ImgIndex fadeIn={true} css={css`margin: 1rem;`} fluid={fluid}/>
      {desc.split('\n').map((parrafo,index)=>{     
        return(
        <div
          key={index}
          css={css`
            text-Align: justify;
            margin:0;
            grid-column-start: 1;
            grid-column-end: -1;
            word-break: break-all;
            hyphens: auto;
          `}
        >
          {parrafo}
        </div>
      )})}

      </div>

    
    </>
  )

} 

export default IndexPage
