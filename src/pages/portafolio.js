import React from 'react';
import{css} from '@emotion/core'
import useTrabajos from '../hooks/useTrabajos';
import useApps from '../hooks/useApps';

import Carrusel from '../components/carrusel';
import SliderCarrusel from '../ui/sliderCarrusel';
import InformacionTrabajo from '../components/informacionTrabajo';


const Portafolio = () => {
    const estaticos =useTrabajos();
    const apps =useApps();

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
                >Mira mis trabajos</h1>
                <p>Una pequeña coleccion de mis proyectos personales. La primera collecion son paginas webs estaticas desarrolladas con nueva tecnologia y la segunda son son aplicaciones webs 100% funcionales.</p>
                <p>Puedes hacer click en el link y visitar cada proyecto online y probarlos.</p>
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