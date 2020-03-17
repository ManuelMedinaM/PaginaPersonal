import styled from '@emotion/styled';
import {css} from '@emotion/core'
import { useSpring, animated } from 'react-spring'
import React,{useState} from 'react';






export const ContenedorMenu = ({children,actuar})=>{
    const props = useSpring({display: actuar ? "block" : "none" , position: actuar? "relative" : "absolute"})
    return <animated.ul css={
        css`
        width: 100%;
            li{
                margin-Bottom: 0rem;
                &:last-of-type{
                    margin-Bottom: 0;
                }
            }
                                  
            @media(max-Width:800px) {
                position: absolute;
                display: none;
            } 
            @media(min-Width:800px) {
                position: relative !important;
                display: block !important;
            } 
        `
    }    style={props}>{children}</animated.ul>

}
export const ContenedorFoot = ({children,actuar})=>{
    const props = useSpring({display: actuar ? "block" : "none" , position: actuar? "relative" : "absolute"})
    return <animated.p   
    css={
        css`
            color:white;
            @media(max-Width:800px) {
               position: absolute;
               display: none;
            }
            @media(min-Width:800px) {
                position: relative !important;
                display: block !important;
            }  
        `
    }   style={props}>{children}</animated.p>

}