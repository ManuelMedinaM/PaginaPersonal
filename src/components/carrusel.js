import React,{useState} from 'react';
import { useTransition, animated } from 'react-spring';
import {ContenedorCarrusel,Botones,ContenedorVinetas} from '../ui/carruselContenedores';
import {css} from '@emotion/core'
import { Vinetas } from '../ui/vinetasCarrusel';



const adelante = {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)    ' },
    leave: { opacity: 0, transform: 'translate3d(50%,0,0)' }
  }
const atras ={
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)    ' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  }

const Carrusel = ({children}) => {
    const [actual,setActual] = useState(1);
    const [animacion, setAnimacion] =useState(adelante);


    //funcion que mueve los slider
    const mover = (x)=>{
      if(x==='R'){
          let i = actual;
          (i+1===children.length)? setActual(0) : setActual(actual+1);
          setAnimacion(adelante);

      }else{
          let i = actual;
          ((i-1) < 0)? setActual(children.length-1) : setActual(actual-1);
          setAnimacion(atras);
      }
    }
    const transitions = useTransition(actual, null, animacion)
    return (
      <div css={css`
        display: flex;
        align-items :center;
        justify-content: center;
        height: 100%;
        padding: 4rem 0;
        @media(max-Width:800px) {
          flex-Direction: column;

        }  
        
      `}
      
      >
        <ContenedorVinetas>
            
            {
            children.map((valor,index)=>(
                <Vinetas
                    key={index}
                    actual={actual}
                    index={index}
                />)
            )} 
        </ContenedorVinetas>
        <ContenedorCarrusel   
        >
        <div>
          {transitions.map(({item, props, key }) =>
            <animated.div  
              key={key} 
              style={props}
            >
              {children[item].props.children[1]}
            </animated.div>
            )}
            <Botones id="L" css={css` left: 10px;`} onClick={()=>{mover('L')}}>&#60;</Botones>
            <Botones id="R" css={css`right: 10px;`} onClick={()=>{mover('R')}}>&#62;</Botones>
        </div>
        <div css={css`
          width: 100%;
          height: 100%;
        `}>
          {transitions.map(({item, props, key })=>
            <animated.div  
              key={key} 
              style={props}
            >
              {children[item].props.children[0]}
            </animated.div>
          )}

        </div>
            
        </ContenedorCarrusel>
      </div>
    );
};

export default Carrusel;