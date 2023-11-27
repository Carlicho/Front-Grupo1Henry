import styled from 'styled-components'

import { Link } from "react-router-dom"
const MyQuestions = () => {
 
  const MisPreguntasBox = styled.div`
  border: solid green 2px;
  width:785px;
  height: 95;
  `;

       

  return (
    
    <MisPreguntasBox>
    <h3>Mis Preguntas</h3>
    <p>Podes ver las preguntas que realizaste y darle seguimiento <Link to="/MisPreguntas">ACA</Link></p>
    </MisPreguntasBox>
  )
}

export default MyQuestions