import styled from '@emotion/styled'
import AniLink  from 'gatsby-plugin-transition-link/AniLink'
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring'
import {css} from '@emotion/core';


const Boton = styled(AniLink)`
    text-decoration:none;
    display: block;
    font-weight: 300;
    text-transform: uppercase;
    padding: 2rem 2rem;
    margin: .2rem auto;
    text-align:center;
    color: #fff;
    font-family: 'Asap', sans-serif;
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.2),-22px -29px 12px rgba(0,0,0,.1) inset;
    transform:translate(0px,0px);
    
    &:last-of-type{
        margin-right:0;
    }

    &::before{
        transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		content: '';
		height: 100%;
		position: absolute;
		top: 0;
        left: 0;
        border-radius:  0 0 px;
        width: 0%;
        background: #ffffff38;;
	}
    &:hover{
        cursor: pointer;
        &::before{
            background: #ffffff38;;
            border: 1px solid #fff;
            width: 100%;

    }
    `
export default Boton;


export const Boton2 = styled.a`
    text-decoration:none;
    display: block;
    font-weight: 300;
    text-transform: uppercase;
    padding: 1rem 1rem;
    margin: .2rem auto;
    text-align:center;
    color: #fff;
    font-family: 'Asap', sans-serif;
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.2),-22px -29px 12px rgba(0,0,0,.1) inset;
    transform:translate(0px,0px);
    grid-column-start: 2;
    grid-column-end: 6;
    background-image: linear-gradient(to right top, #2e42cb, #4840d7, #603de2, #7836ec, #902bf5, #902bf5, #902bf5, #902bf5, #7836ec, #603de2, #4840d7, #2e42cb);
    text-Align:center; 
    
    &:last-of-type{
        margin-right:0;
    }

    &::before{
        transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		content: '';
		height: 100%;
		position: absolute;
		top: 0;
        left: 0;
        border-radius:  0 0 px;
        width: 0%;
        background: #ffffff38;;
	}
    &:hover{
        cursor: pointer;
        &::before{
            background: #ffffff38;;
            border: 1px solid #fff;
            width: 100%;

    }
    `



const calc = (x, y, ref) => [(y - ref.clientHeight / 2) / 50, (x - ref.clientWidth / 2) / 10, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const ContenedorBoton = ({children})=>{
    const liRef = useRef(null);
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return(
    <animated.li
     
        ref={liRef}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y,liRef.current) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
    >
       {children}
    </animated.li>)
}

const calcT = (x, y, ref) => [(y - ref.clientHeight / 2) / 10, (x - ref.clientWidth / 2) / 10, 1.2]

export const ContenedorTitulo = ({children})=>{
    const liRef = useRef(null);
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return(
    <animated.div
    ref={liRef}
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcT(x, y,liRef.current) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}
    style={{ transform: props.xys.interpolate(trans) }}
    css={css`                         
        @media(max-Width:800px) {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items:center;
            align-Items: center;
            transform:none !important;
            .boton-menu{
                display:block;
            }
        } 
    `}
    >
       {children}
    </animated.div>)
} 