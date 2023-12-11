import styled from 'styled-components'
const MisReservas = () => {

  const MisReservasBox = styled.div`
  border: solid blue 2px;
  width:785px;
  height: 95;
  `; 

  return (

    <MisReservasBox>
    <h3>Mis Reservas</h3>
    <p>aun no tenes reservas hechas</p>
    </MisReservasBox>
  )
}

export default MisReservas