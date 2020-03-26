import React from 'react';

import {Global,css} from '@emotion/core';
import styled from '@emotion/styled';

import MenuNav from './menuNav';
import SEO from './seo';

const ContenedorInfo = styled.div`
        border-Radius: 55px 0px 0px 55px;
        width: 90%;
        margin: 0 auto;
        height: 90vh;
        background-Color: white;
        box-shadow: 0 0 21px 17px rgba(0, 0, 0, 0.2),0 0 40px rgba(0,0,0,.1) inset;
        scrollbar-color: rgb(98, 60, 227) #ed000000;
        scrollbar-width: thin;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 7px;            
        }
        ::-webkit-scrollbar-thumb {
            background-Color:rgb(98, 60, 227);
            border-radius: 10px
        }
        ::-webkit-scrollbar-button{
            border-radius:20px;  
        } 
        h1{
            font-size: 3em;
        }

        @media(max-Width:800px) {
            border-Radius: 0;
            width: 100%;
            height: 100%;
        } 
       
        .tl-edges{
            overflow-y:scroll;
            scrollbar-width: thin;
            height: 100%;
            ::-webkit-scrollbar {
                width: 7px;            
            }
            ::-webkit-scrollbar-thumb {
                background-Color:rgb(98, 60, 227);
                border-radius: 10px
            }
            ::-webkit-scrollbar-button{
                border-radius:20px;  
            }
        }
        .tl-edges>div{
            height:100%;
        }


  
`

const Layout = ({children}) => {
    return (
        <>

        <Global
            styles={
                css`
                html{
                    font-size:62.5%;
                    box-sizing: border-box;
                }
                *, *:before, *:after {
                    box-sizing: inherit;
                    
                  }
                body{
                    font-size:18px;
                    font-size:1.8rem;
                    background-Color: #F0F0F0;
                    font-family: 'Rubik', sans-serif;
                    line-height : 1.7;
                    
                }
                
                h1,h2,h3{
                    margin: 0;
                    font-family: 'Lato', sans-serif;
                }
                ul{
                    list-style:none;
                    margin: 0;
                    padding: 0; 
                }
                `
            }
        />
        <SEO/>
        <>  
            <div
                css={
                    css`
                    display: grid;
                    grid-Template-Columns: 1fr 5fr;
                    column-gap:2rem;
                    @media(max-Width:800px) {
                        grid-Template-Columns:1fr; 
                        grid-Template-rows: auto auto; 
                    } 
                    `
                }
                >
                <div
                    css={
                        css`
                        height: 100vh;
                        color: white;
                        @media(max-Width:800px) {
                            position: relative;
                            height: 100%;
                            } 
                            `
                    }
                    >
                    
                    <MenuNav/>
                </div>
                <div
                    css={
                        css`
                        padding: 4rem 0 0 0;
                            @media(max-Width:800px) {
                                padding: 0;
                            } 
                            `
                        }
                >
                    <ContenedorInfo
                    >
                        {children}
                    </ContenedorInfo>
                </div>
            </div>
        </>
    </>
    )
}

export default Layout;