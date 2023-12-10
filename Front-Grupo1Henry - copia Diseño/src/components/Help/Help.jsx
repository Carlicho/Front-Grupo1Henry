import React from 'react'

import styled from 'styled-components'


const Help = () => {

const HelpContainer = styled.div`
   
    
    width: auto;
    margin: .3125rem 15.625rem;
`
const SectionTittle = styled.div`
    height: 3.5rem;
    width: max-content;
    margin:0 0 20px 2px;
`

const Hh2 = styled.h2`
    font-size: 48px;
    
`

const AnswersContainer = styled.div`
    height: 438px;
    background-color: #f0f0f085;
    
`

const Answerbox = styled.div`
    height: 48px;
    border: 0.2px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const AnswerTittle = styled.p`
    font-size: 1.2rem;
    margin: 0 0 0 5px ;
    padding:10px ;
`

const Postventadiv = styled.div`
    height: 256px;
    border: .125rem solid pink;
    background-color: #f0f0f085;
    margin: 20px 0px;
`

const Postventatittle = styled.h2`
font-size: 28px;
padding:10px ;

`

const Postventatext = styled.p`
font-size: 18px;
padding:10px ;
`

const Postventabtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
width: 18.3125rem;
height: 2.25rem;
border-radius: 4px;
color: #fff;
font-weight: bold;
padding:10px ;

`

const TuConsultadiv = styled.div`
    height: 256px;
    border: .125rem solid pink;
    background-color: #f0f0f085;
    margin: 20px 0px;
`

const TuConsultatittle = styled.h2`
font-size: 28px;
`

const TuConsultaText = styled.p`
font-size: 18px;
padding:10px ;
`

const IniciarSesion = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
width: 18.3125rem;
height: 2.25rem;
border-radius: 4px;
color: #fff;
font-weight: bold;
`

  return (
    <HelpContainer>

        <SectionTittle>
        <Hh2>Preguntas Frecuentes</Hh2>
        </SectionTittle>

        <AnswersContainer>
        <Answerbox><AnswerTittle>Realizar un pedido</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Precio</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Formas de pago</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Deposito - Transferencia bancaria</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Pago Gamer</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>MercadoPago</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Envios</AnswerTittle></Answerbox>
        <Answerbox><AnswerTittle>Facturazion</AnswerTittle></Answerbox>
        </AnswersContainer>
        
        <Postventadiv>
        <Postventatittle>Servicio postventa y garantias</Postventatittle>
        <Postventatext>Para realizar consultas/reclamos relacionadas con la garantía 
        o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado 
        -Compra Gamer te ayuda. ¿Cuál es tu consulta?- donde debes exponer tu caso, seleccionando
         el motivo de -Postventa- que se adapte a tu requerimiento y uno de nuestros representantes
          te ofrecerá la información correspondiente sobre cómo proceder
        </Postventatext>
        <Postventabtn>TURNOS POSTVENTA/GARANTIAS</Postventabtn>
        </Postventadiv>

        <TuConsultadiv>
        <TuConsultatittle>Te Ayudamos,Cual es tu Consulta?</TuConsultatittle>
        <TuConsultaText>Para realizar una consulta es necesario que inicies sesión en tu cuenta</TuConsultaText>
        <IniciarSesion>IniciarSesion</IniciarSesion>
        </TuConsultadiv>



    </HelpContainer>
  )
}

export default Help