import React, { useState } from 'react';

import {css} from '@emotion/core'
import {graphql,useStaticQuery} from 'gatsby';
import useSeo from '../hooks/useSeo';

import ContenedorEmojis from './contenedorEmojis';
import { ContenedorMenu, ContenedorFoot, ContenedorDesc } from '../ui/contenedoresMenu';
import Boton,{ContenedorBoton,ContenedorTitulo, BotonMenuR} from '../ui/Botones';
import AniLink  from 'gatsby-plugin-transition-link/AniLink'



const MenuNav = () => {
    const { file:{childImageSharp:{fluid:{src}}} } = useStaticQuery(
        graphql`
        query {
            file(relativePath: {eq: "menu.png"}) {
              childImageSharp {
                fluid(maxHeight: 50, maxWidth: 50) {
                    src
                }
              }
            }
          }          
        `
        )
    const [actuar,setActuar] = useState(false);
    const fecha =new Date().getFullYear();
    const {title,author} = useSeo(); 
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
                    swipe 
                    top="exit"
                    entryOffset={110}
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
                    SpaceCode
                </AniLink>
                <BotonMenuR 
                    onClick={()=>{setActuar(actuar?false:true)}}
                    click = {actuar} 
                    className="boton-menu" 
                    img={src}
                />
            </ContenedorTitulo>
            
            <ContenedorDesc
                actuar={actuar}
            >
                Bienvenidos a mi WebPersonal, donde podrás conocerme un poco mas y ver mis trabajos.
            </ContenedorDesc>

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
                        swipe 
                        top="exit"
                        to={"/contacto"}
                        entryOffset={110}
   
                    >
                        Contacto
                    </Boton>
                </ContenedorBoton>
            </ContenedorMenu>
            <ContenedorFoot
                actuar={actuar}
            >
                &#169;{title}{fecha}, hecho por {author}, realizado con Gatsby y Strapi.
            </ContenedorFoot>
            <ContenedorEmojis
            
            />
        </nav>

    );
};

export default MenuNav;