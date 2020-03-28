import React from 'react';
import {css} from '@emotion/core';


import { SeparadorMorado } from '../ui/separador';
import InfoContacto from '../components/infoContacto';
import useContacto from '../hooks/useContacto';

const Contacto = () => {
    const {titulo,resultado} = useContacto();
    console.log(titulo, resultado);
    return (
        <div css={css`
        display:grid;
        grid-Template-Columns: 1fr;
        grid-template-rows: auto;
        text-Align:center; 
        padding: 2rem 8rem;
        overflow: hidden;

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
      >
        {titulo}
        <SeparadorMorado
          css={css`margin: 0 auto;`} 
        />
        </h1>
        {
          resultado.map((dato,index)=>(
            <InfoContacto
              key={index}
              imagen={dato.src}
              contenido={dato.parrafo}
            />
        ))}
    </div>
    );
};

export default Contacto;