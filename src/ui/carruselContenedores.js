import styled from '@emotion/styled'
import Image from 'gatsby-image';



export const ContenedorCarrusel = styled.div`
    width: 85%;
    height: 100%;
    max-width: 900px;
    display: grid;
    grid-Template-Columns: 1fr 1fr;
    column-Gap: 5rem;
    position: relative;

    @media(max-Width:800px) {
        grid-Template-Columns:1fr;
        grid-Template-rows: 48vh auto;
        row-gap:3rem;        
        border-radius:0;

    } 
    
    >div{
        overflow: hidden; 
        position: relative;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 10px #fff,0 15px 50px;
        display: flex;
        justify-content:center;
        align-items: center;
        >div{
            position: absolute;
            grid-column-start: 1;
            grid-column-end: 1;
            // max-width: 400px;
            width: 100%;
            height: 100%;
            will-change: transform, opacity;

            &:last-of-type{
                grid-column-start: 2;
                grid-column-end: 2;
            }
        }

        &:last-of-type{
            box-shadow: initial;
            overflow-y:scroll;
            scrollbar-width: thin;
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
    }
`

export const Slider = styled.div`
    width: 100%;
    height: 100%
`

export const SliderImage = styled(Image)`
    display: block;
    width: 100%;
    height: 100%;

`

export const Botones = styled.button`
    width: 40px;
    height: 40px;
    background-image: linear-gradient(to right top, #2e42cb, #4840d7, #603de2, #7836ec, #902bf5, #902bf5, #902bf5, #902bf5, #7836ec, #603de2, #4840d7, #2e42cb);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    border-radius: 50%;
    font-family: monospace;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 10px 26px;
    border: none;
    :hover{
        background: #ffffffba;
    }
`

export const ContenedorVinetas = styled.div`
    z-index:1;
    margin: 0 10px 0 0;
    background-image: linear-gradient(to right top, #2e42cb, #4840d7, #603de2, #7836ec, #902bf5, #902bf5, #902bf5, #902bf5, #7836ec, #603de2, #4840d7, #2e42cb);
    border-radius: 25px 0 0 25px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 10px 26px;
    padding: 3rem .4rem;
    @media(max-Width:800px) {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 5px 4px 40px;
        margin: 0 0px 10px 0;
        padding: .4rem 3rem;
        border-radius: 25px 25px 0 0px;
        display: flex;
      }  
`

