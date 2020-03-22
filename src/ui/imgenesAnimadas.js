import styled from '@emotion/styled'
import Image from 'gatsby-image'

export const ContenedorEmoji = styled(Image)`
    @keyframes rebota{
    0%{transform: translateY(.7rem);}
    }
    height: 40px;
    width: 40px;
    top: ${props=>props.norte};
    bottom: ${props=>props.sur};
    right: ${props=>props.este};
    left:  ${props=>props.oeste};
    animation: rebota 2s alternate infinite ease-in;
    will-change: transform;
    position: absolute!important;
    z-Index: 11;
    @media(max-Width:800px){
        display: none !important;
    }
    
`
export const ContenedorEmojiRota = styled(Image)`
@keyframes rota{
    0%{transform: rotate(0.5turn);}
    }
    @media(max-Width:800px){
            display: none!important;
    }
    height: 40px;
    width: 40px;
    top: ${props=>props.norte};
    bottom: ${props=>props.sur};
    right: ${props=>props.este};
    left:  ${props=>props.oeste};
    animation: rota 7s alternate infinite ease-in;
    will-change: transform;
    position: absolute!important;
    z-Index: 11;
    
`