import React from 'react';
import {SliderImage} from '../ui/carruselContenedores'


const SliderCarrusel = ({imagen}) => {
    return (
        <>  
            <SliderImage
                fluid={imagen}
            />  
        </>
    );
};

export default SliderCarrusel;