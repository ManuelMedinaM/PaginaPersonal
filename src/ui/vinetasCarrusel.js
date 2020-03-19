import { useSpring, animated } from 'react-spring';
import React,{useState, useEffect} from 'react';
import {css} from '@emotion/core';




export const Vinetas = ({index,actual})=>{
    const [animacion,setAnimacion] = useState({});
    const selec = useSpring({
        to :{ opacity: 1, background: 'rgb(255, 255, 255)' },
        from:{ opacity: 0, background: 'rgba(255, 255, 255, 0)'}
    })
    const desSelec = useSpring({
        to:{ opacity: 1, background: 'rgba(255, 255, 255, 0)' }
    })
    useEffect(()=>{
        if(index===actual){setAnimacion(selec)}
        else{setAnimacion(desSelec)}
    },[actual])
    return(
        <animated.div 
            css={css`    
            height: 1.2rem;
            width: 1.2rem;
            margin-Bottom: 1rem;
            border-radius: 100%; 
            border: 1px solid #fff; 
            
            &:last-of-type{
                margin-Bottom:0;
            }
            @media(max-Width:800px) {
                margin-Bottom: 0rem;
                margin-right: 1rem;
                &:last-of-type{
                        margin-right: 0rem;
                    }
              }  
            `}
            style={animacion}>
        </animated.div>
        )
}