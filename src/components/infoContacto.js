import React from 'react';
import {css} from '@emotion/core';
import Image from 'gatsby-image';

const InfoContacto = ({imagen, contenido}) => {


    return (
        <div css={
            css`
                grid-template-columns: 20% 80%;
                display: grid;
                justify-items: center;
                align-items: center;
                word-break: break-all;
                hyphens: auto;
                margin: 2rem 0;
                background: #FFF;
                box-shadow: 0px 0px 13px 9px #c7c7c7 inset,0 0px 25px;
                
          }`
        }>
            <Image
                fluid={imagen}
                css={css`
                    width: 50px;
                    height: 50px;
                    `}
            />
            <p
              css={css`
                    justify-self:start;
                    margin: 3rem 0rem;
              `}
            >  
               {contenido}
            </p>
        </div>
    );
};

export default InfoContacto;