

import styled from 'styled-components'
import MisReservas from "./CardsUserLogued/BookingCard"
import MyQuestions from './CardsUserLogued/MyQuestionsCard'
import MyBills from './CardsUserLogued/MyBillsCard'
import GamerCoins from './CardsUserLogued/GamerCoinsCard'
import MyAccount from './CardsUserLogued/MyAccountCard'
import MyAdress from './CardsUserLogued/MyAdressCard'

const UserSettings = () => {

const AccountContainer = styled.div`

 height: 500px;
 display: flex;
 justify-content: space-around;
 margin: 0 30px;
 padding: 10px;
 `  

const AccRightColumn = styled.div`

display:flex;
flex-direction:column;
justify-content: space-around;
`  

const AccLeftColumn = styled.div`
 
 display:flex;
flex-direction:column;
justify-content: space-around;`  
       

  return (

    <AccountContainer>

        <AccRightColumn>
        <MisReservas/>
        <GamerCoins/>
        <MyQuestions/>
        </AccRightColumn>

        <AccLeftColumn>
        <MyBills/>
        <MyAdress/>
        <MyAccount/>
        </AccLeftColumn>







   




        

        
    </AccountContainer>
  )
}

export default UserSettings