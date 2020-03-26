import React from 'react';
import {css} from '@emotion/core';

const InfoContacto = ({Imagen, contenido}) => {
    return (
        <div css={
            css`
                word-break: break-all;
                hyphens: auto;
                margin: 2rem 0;
                background: #FFF;
                box-shadow: 0px 0px 13px 9px #c7c7c7 inset,0 0px 25px;
          }`
        }>
            <p
              css={css`
                    margin: 3rem 0rem;
              `}
            >
               {contenido}
            </p>
        </div>
    );
};

export default InfoContacto;