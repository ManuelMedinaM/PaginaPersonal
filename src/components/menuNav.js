import React, { useState } from 'react';

import {css} from '@emotion/core'
import AniLink  from 'gatsby-plugin-transition-link/AniLink'
import Boton,{ContenedorBoton,ContenedorTitulo} from '../ui/Botones';
import { ContenedorMenu, ContenedorFoot } from '../ui/contenedoresMenu';



const MenuNav = () => {
    const [actuar,setActuar] = useState(false); 
    return (
        <nav
            css={
                css`
                    background-image: linear-gradient(to right top, #2e42cb, #4840d7, #603de2, #7836ec, #902bf5, #902bf5, #902bf5, #902bf5, #7836ec, #603de2, #4840d7, #2e42cb);
                    border-radius:0 65px 65px 0;
                    height: 100%;
                    display: flex;
                    justify-Content: space-around;
                    align-Items:center ;
                    flex-Direction: column;
                    box-shadow: 4px 4px 21px 17px rgba(0, 0, 0, 0.2),-22px -29px 12px rgba(0,0,0,.1) inset;
                    @media(max-Width:800px) {
                        border-radius:0;
                        justify-Content: initial;
                    } 
                `
            }
        >

            <ContenedorTitulo>
                <AniLink
                    to={"/"}
                    css={
                        css`
                        font-size:4rem;
                        color:white;
                        text-decoration:none;
                        font-weight:bold;
                        font-family: 'Lato', sans-serif;
                        `
                    }
                >
                    Manuel
                </AniLink>
                <button onClick={()=>{setActuar(actuar?false:true)}} className="boton-menu" css={css` @media(min-Width:800px){
                    display: none;
                }`} >
                    ...
                </button>
            </ContenedorTitulo>
            <ContenedorMenu
                actuar={actuar}
            >
                <ContenedorBoton>
                    <Boton
                        swipe 
                        top="exit"
                        to={"/"}
                        entryOffset={110}
                        
                    >
                            Conoceme
                    </Boton>
                </ContenedorBoton>
                <ContenedorBoton>
                    <Boton
                        swipe 
                        top="exit"
                        to={"/portafolio"}
                        entryOffset={110}
                        
                    >
                        Portafolio
                    </Boton>
                </ContenedorBoton>
                <ContenedorBoton>
                    <Boton
                        to={"/"}
   
                    >
                        Contacto
                    </Boton>
                </ContenedorBoton>
            </ContenedorMenu>
            <ContenedorFoot
                actuar={actuar}
              
            >Todos los derechos reservados
            </ContenedorFoot>
        </nav>

    );
};

export default MenuNav;