import {useRef, useEffect} from 'react'
import styled from 'styled-components'



const Slideshow = ({children}) => {

    //FUnciones

    
    const slideShow = useRef(null)
    const intervaloSlideShow = useRef(null)

    const siguiente =()=>{
        if(slideShow.current.children.length > 0) {
            const primerElemento = slideShow.current.children[0];

            slideShow.current.style.transition = `500ms ease-out all`;

            const tamañoSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`
        

            const transicion = ()=>{

                slideShow.current.style.transition = 'none'
                slideShow.current.style.transform = `translateX(0)`

                slideShow.current.appendChild(primerElemento);

                slideShow.current.removeEventListener('transitionend', transicion)
            }


            slideShow.current.addEventListener('transitionend', transicion)
        }
    }

    
    const anterior = () => {
        if(slideShow.current.children.length > 0) {
            const index = slideShow.current.children.length -1;
            const ultimoElemento = slideShow.current.children[index];
            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild)

            slideShow.current.style.transition='none';

            const tamañoSlide = slideShow.current.children[0].offsetWidth;
            slideShow.current.style.transform= `translateX(-${tamañoSlide}px)`

            setTimeout(()=>{
                slideShow.current.style.transition='300ms ease-out all';
                slideShow.current.style.transform = `translateX(0)`
            },5000)

        }
    }

    useEffect(()=>{
        intervaloSlideShow.current = setInterval (()=>{
            siguiente()
        },5000);

        slideShow.current.addEventListener('mouseenter', ()=>{
            clearInterval(intervaloSlideShow.current)
        });

        slideShow.current.addEventListener('mouseleave', ()=>{
            intervaloSlideShow.current = setInterval (()=>{
                siguiente()
            },5000);
        });
    },[]);


    //


  return (
    <ContenedorPrincipal>
        <ContenedorSlideshow ref={slideShow}>


            {children}

        </ContenedorSlideshow>

        <Controles>
            <BotonL onClick={anterior}>Izquierda</BotonL>
            <BotonD onClick={siguiente}>Derecha</BotonD>
        </Controles>
    </ContenedorPrincipal>
  )
}

const ContenedorPrincipal = styled.div`
    overflow: hidden;
    
`



const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height:900px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`

const TextoSlide = styled.div`
    position: absolute;
    bottom: 0;
    background:rgba(0, 0, 0, 0.484);
    color: #FFF;
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    
`

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`

const BotonL = styled.button`
font-size: 30px;
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
height: 50px;
width: 50px;
text-align: center;
position: absolute;
left:-150px;
top: 50%;
    
`

const BotonD = styled.button`
font-size: 30px;
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;

text-align: center;
position: absolute;
left:1200px;
top: 50%;
`


    


export {Slideshow, Slide, TextoSlide}