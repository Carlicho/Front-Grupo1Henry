import styled from 'styled-components'
import UpLoadWidget from '../Claudinary/upLoadWidget'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Admin = () => {


//prueba
const [showForm, setShowForm] = useState(false);
const url = 'http://localhost:3001/productos';
const [productos, setProductos] = useState([]);
const [id,setId]= useState('');
const [nombre,setName]= useState('');
const [descripcion,setDescripcion]= useState('');
const [precio,setPrecio]= useState('');
const [operation, setOperation]= useState('');
const [tittle,setTittle]= useState('');

const toggleForm = () => {
  setShowForm(!showForm);
};

const handleGuardarProducto = () => {
  // Lógica para guardar el producto
  // ...

  // Después de guardar el producto, oculta el formulario
  setShowForm(false);
};


useEffect(()=>{
  getProductos()
},[]);

const getProductos = async () => {
  await axios('http://localhost:3001/productos').then(res=>{
    setProductos(res.data)
    console.log(res.data, '->data admin');
  }).catch(error =>{
    console.log(error);
  })
}
//fin prueba



  
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
    text-shadow: 2px 2px 2px  #fff,
     -2px -2px 2px  #fff
     
    
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
  background-color: #f2f1f1;
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






const TableTd = styled.td`
display: flex;
width: 28.3125rem;
height: 5.55rem;
margin-left: 1.25rem;
background-color: #f2f1f1;
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

    <button className='agregarproductobtn' onClick={toggleForm} >Agregar Producto</button>

    {showForm && (
        <div className='agregarProductoformulario'>
          <input type='text' value={nombre} onChange={(e) => setName(e.target.value)} placeholder='nombre' />
          <input type='text' value={descripcion} onChange={(e) => setName(e.target.value)} placeholder='descripcion' />
          <input type='text' value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='precio' />
          
          {/* Otros campos del formulario */}
          <button onClick={handleGuardarProducto}>Guardar Producto</button>
        </div>
      )}

    <TableContainer>
      <thead>
        <Tabletr>
          
          <Tableth>PRODUCTOS</Tableth>
          <Tableth>ACCIONES</Tableth>
        </Tabletr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <Tabletr key={producto.id_producto}>
          <TableTd>{producto.nombre}</TableTd>
            <TableTd>{producto.descripcion}</TableTd>

            <TableButtons>
              <UpLoadWidget />
              <BtnAgregar>Agregar</BtnAgregar>
              <BtnEditar>Editar</BtnEditar>
              <BtnEliminar>Eliminar</BtnEliminar>
            </TableButtons>
          </Tabletr>
        ))}
      </tbody>
    </TableContainer>

    <AnswersContainer></AnswersContainer>
  </AdminContainer>
);
};

export default Admin;