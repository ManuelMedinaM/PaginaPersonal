import React from 'react';
import{css} from '@emotion/core'
import useTrabajos from '../hooks/useTrabajos';
import useApps from '../hooks/useApps';

import Carrusel from '../components/carrusel';
import SliderCarrusel from '../ui/sliderCarrusel';
import InformacionTrabajo from '../components/informacionTrabajo';
import { SeparadorMorado } from '../ui/separador';
import usePortafolio from '../hooks/usePortafolio';


const Portafolio = () => {
    const estaticos =useTrabajos();
    const apps =useApps();
    const{strapiPagina:{desc,titulo}} = usePortafolio();

    return (
    <>
        <div
            css={css`
            `}
        >
            <div
                css={css`
                   padding: 0rem 10rem;
                   text-Align: center;
                   @media(max-Width:800px) {
                        padding: 0rem 3rem;
                    } 

                `}
            >
                <h1
                    css={css`
                    `}
                >{titulo}
                <SeparadorMorado
                    css={css`
                        margin: 0 auto;
                    `}
                />
                </h1>
                {desc.split('\n').map((parrafo,index)=>(
                    <p key={index}>{parrafo}</p>
                ))}
            </div>
            <div css={
                css`
                    height: 100%;
                    display: grid;
                    grid-Template-Columns: 1fr;
                    grid-template-rows: 80vh 80vh;
                    row-gap: 6rem;
                    column-gap:2rem;
                    @media(max-Width:800px) {
                        row-gap: 3rem;
                        grid-template-rows: auto 100%;
                    }  
                `}>
                
                <Carrusel>
                    {estaticos.map((estatico,index)=>{
                        const{datos,imagenPrincipal} = estatico
                        return(
                        <React.Fragment
                            key={datos.id}
                        >
                            <InformacionTrabajo
                                datos={datos}
                            />
                            <SliderCarrusel
                                imagen={imagenPrincipal}
                            />
                        </React.Fragment>
                        )})
                    }
                </Carrusel>
                
                <Carrusel>
                    {apps.map((app,index)=>{
                        const{datos,imagenPrincipal} = app
                        return(
                        <React.Fragment
                            key={datos.id}
                        >
                            <InformacionTrabajo
                                datos={datos}
                            />
                            <SliderCarrusel
                                imagen={imagenPrincipal}
                            />
                        </React.Fragment>
                        )})
                    }
                </Carrusel>
            </div>
        </div>
    </>
    );
};

export default Portafolio;