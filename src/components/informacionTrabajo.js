import React from 'react';
import {css} from '@emotion/core'
import styled from '@emotion/styled'

import Image from 'gatsby-image';
import {Boton2} from '../ui/Botones'

const ContenedorInfoTrabajo = styled.div`
          height: 100%;
          width: 100%;
          text-Align: center;
          display: grid;
          grid-template-columns: repeat(6,1fr)  ;
          grid-template-row: repeat(6,1fr)  ;
          align-content: baseline;
          align-Items: center;
          justify-Content: center;
          font-size:1.8rem;
          font-family: 'Rubik', sans-serif;
          line-height : 1.8;
          column-gap:1rem;
          row-gap:1rem;
`

const InformacionTrabajo = ({datos}) => {
    const{titulo,herramientas,imgaenesHerramientas,Descripcion,url} = datos;




    return (
        <ContenedorInfoTrabajo>
          <h1
            css={css`
            margin:0; 
            grid-column-start: 1;
            grid-column-end: -1;
            `}
          >{titulo}</h1>

          {imgaenesHerramientas.map((imagen,index)=>{

            if(imagen=== null || imagen=== undefined) return null;
            return(
            <React.Fragment
              key={index}
            >
              <div>{herramientas[index]}</div>
              <Image css={css`
                  max-Width: 40px;
                  max-height: 40px;
              `} cover  fluid={imagen.childImageSharp.fluid}/>
            </React.Fragment>
            )})}
          {
            Descripcion.split('\n').map((parrafo,index)=>(
              <p 
              key={index}
              css={css`
                margin: .1rem 0;
                grid-column-start: 1;
                grid-column-end: -1;
                font-Size: 1.6rem;
                `}>
                {parrafo}
              </p>
            ))}
        <Boton2 href={url} >Mira {titulo} online</Boton2>
        </ContenedorInfoTrabajo>
    );
};

export default InformacionTrabajo;