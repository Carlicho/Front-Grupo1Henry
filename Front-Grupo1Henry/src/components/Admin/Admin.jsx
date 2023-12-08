import React from 'react'

import styled from 'styled-components'


const Admin = () => {

const AdminContainer = styled.div`
   
    
    width: auto;
    margin: .3125rem 15.625rem;
`
const SectionTittle = styled.div`
    height: 3.5rem;
    width: max-content;
    margin:0 0 20px 2px;
`

const Adminh2 = styled.h2`
    font-size: 48px;
    
`

const AnswersContainer = styled.div`
    height: 438px;
    background-color: #f0f0f085;
    
`

const TableContainer = styled.table`
    height: 43.75rem;
    padding: px;
    align-items: center;
    width: 100%; /* Set the width of the table */
  border-collapse: collapse; /* Collapse borders for a cleaner look */
  margin-top: 20px; /* Adjust margin as needed */
    
    
`
const Tableth = styled.th`
    font-size: 1.2rem;
    margin: 0 0 0 5px ;
    padding:10px ;
    border: 1px solid #ddd; /* Add borders to cells */
  padding: 8px; /* Add padding to cells */
  text-align: left; /* Align text within cells */
  margin-left: 20px;
`

const Tabletr = styled.tr`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    margin: 0 0 0 5px ;
    padding:10px ;
`



const TuConsultadiv = styled.div`
    height: 256px;
    border: .125rem solid pink;
    background-color: #f0f0f085;
    margin: 20px 0px;
`


const TableTd = styled.td`
display: flex;
width: 18.3125rem;
height: 2.55rem;
margin-left: 1.25rem;

font-weight: bold;
border: 1px solid #ddd; /* Add borders to cells */
  padding: 8px; /* Add padding to cells */
  text-align: left; /* Align text within cells */
`

const TableButtons = styled.td`
display: flex;
justify-content: end;
width: 20.3125rem;
height: 2.25rem;
margin-left: 30px;
font-weight: bold;
margin: 2px;

`

const BtnAgregar = styled.button`
margin-left: 2px;
margin-right: 2px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
border-radius: 4px;
color: #fff;
font-weight: bold;
`

const BtnEditar = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
margin-left: 2px;
margin-right: 2px;

border-radius: 4px;
color: #fff;
font-weight: bold;
`

const BtnEliminar = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
margin-left: 2px;

border-radius: 4px;
color: #fff;
font-weight: bold;
`

  return (
    <AdminContainer>

<SectionTittle>
        <Adminh2>Admin</Adminh2>
        </SectionTittle>

        <TableContainer>
            <thead>
            <Tabletr>
                <Tableth>ID</Tableth>
                <Tableth>PRODUCTOS</Tableth>
                <Tableth>ACCIONES</Tableth>
            </Tabletr>
            </thead>
            <tbody>
            <Tabletr>
            <TableTd>1</TableTd>
            <TableTd>Monitores</TableTd>
            <TableButtons>
            <BtnAgregar>Agregar</BtnAgregar>
            <BtnEditar>Editar</BtnEditar>
            <BtnEliminar>Eliminar</BtnEliminar>
            </TableButtons>
            </Tabletr>
            </tbody>
        </TableContainer>



        <AnswersContainer>

        </AnswersContainer>
        
 
    </AdminContainer>
  )
}

export default Admin