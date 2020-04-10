import React from 'react';
import {css} from '@emotion/core'
import styled from '@emotion/styled'

import Image from 'gatsby-image';
import {Boton2} from '../ui/Botones'
import { SeparadorMorado } from '../ui/separador';

const ContenedorInfoTrabajo = styled.div`
          height: 100%;
          width: 100%;
          padding: 0 2rem;
          text-Align: center;
          display: flex;
          flex-direction:column;
          align-Items: center;
          font-size:1.8rem;
          font-family: 'Rubik', sans-serif;
          line-height : 1.8;

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
            font-Size: 2.8rem;
            `}
            >{titulo}
            
          <SeparadorMorado/>
          </h1>
          <div
          css={css`
            margin: 2rem 0;
            display: grid;
            align-items:center; 
            justify-Content: center;
            grid-Template-Columns:repeat(3,1fr);
            @media(max-width:800px){
              column-gap: 2rem;
            }
          `}>
            {imgaenesHerramientas.map((imagen,index)=>{

              if(imagen=== null || imagen=== undefined) return null;
              return(
              <div
                css={css`
                  display: grid;
                  align-items:center; 
                  justify-Content: center;
                  grid-Template-Columns:repeat(2,1fr);
                  @media(max-Width:800px) {
                    grid-Template-Columns: repeat(auto-fill, 100%);
                    height: 100%;
                    justify-self: center;
                    } 
                `}
                key={index}
              >
                <div
                  css={css`
                  word-break: initial!important;
                  @media(max-width:800px){
                    align-self: self-end;
                  }`}
                >{herramientas[index]}</div>
                <div
                  css={css`@media(max-width:800px){
                    align-self: self-start;
                }`}>
                  <Image css={css`
                      max-Width: 40px;
                      max-height: 40px;
                  `} cover  fluid={imagen.childImageSharp.fluid}/>
                </div>
              </div>
              )})}
          </div>

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