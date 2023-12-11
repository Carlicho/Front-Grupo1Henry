import styled from 'styled-components'
import UpLoadWidget from '../Claudinary/UpLoadWidget';
import NuevoUploadWidget from '../Claudinary/NuevoUploadWidget';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const {
  VITE_URL_BACKEND,
  VITE_URL_FRONTEND,
  VITE_AUTH0_AUDIENCE
} = import.meta.env;

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

const Admin = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ showEditForm, setShowEditForm ] = useState(false);
  const [ showDeleteForm, setShowDeleteForm ] = useState(false);

  const [ productos, setProductos ] = useState([]);
  const [ categorias, setCategorias ] = useState([]);
  const [ subCategorias, setSubCategorias ] = useState([]);

  // estos estados no se guardan en el producto
  // solo sirven como parte de la ui
  const [ categoria, setCategoria ] = useState(0);
  const [ idProducto, setIdProducto ] = useState(0);

  const [ subCategoria, setSubCategoria ] = useState(0);
  const [ nombre, setNombre ]= useState('');
  const [ sku, setSku ]= useState('');
  const [ descripcion, setDescripcion ]= useState('');
  const [ precio, setPrecio ]= useState(0);
  const [ stock, setStock ]= useState(0);
  const [ urlImagen, setUrlImagen ] = useState('');

  const { getAccessTokenSilently, logout } = useAuth0();
  const token = useRef();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleEditForm = async ( producto ) => {
    setNombre(producto.nombre);
    setSku(producto.sku);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio)
    setStock(producto.stock);
    setUrlImagen(producto.url_imagen);

    const result = await axios.get(`${VITE_URL_BACKEND}/subcategorias/${producto.id_sub_categoria}`);

    setCategoria(result.data.id_categoria);
    setSubCategoria(producto.id_sub_categoria);
    setIdProducto(producto.id_producto);

    setShowEditForm(!showEditForm);
  };

  const toggleDeleteForm = ( producto ) => {
    setIdProducto(producto.id_producto);

    setShowDeleteForm(!showDeleteForm);
  };

  const handleGuardarProducto = async () => {
    //console.log('Hey!', nombre, sku, descripcion, precio, stock, urlImagen, subCategoria);

    await axios.post(`${VITE_URL_BACKEND}/productos`, {
      nombre,
      sku,
      descripcion,
      precio,
      stock,
      url_imagen: urlImagen,
      id_sub_categoria: subCategoria
    }, {
      headers: {
        'Authorization': `Bearer ${token.current}`
      }
    });
    
    setNombre('');
    setSku('');
    setDescripcion('');
    setPrecio(0);
    setStock(0);
    setUrlImagen('');
    setCategoria(categorias[0]?.id_categoria || 0);

    setShowForm(false);

    const result = await axios.get(`${VITE_URL_BACKEND}/productos`);

    setProductos(result.data);
  };

  const handleModificarProducto = async () => {
    //console.log('Id producto', idProducto);
    //console.log('Hey!',  nombre, sku, descripcion, precio, stock, urlImagen, subCategoria);

    await axios.put(`${VITE_URL_BACKEND}/productos/${idProducto}`, {
      nombre,
      sku,
      descripcion,
      precio,
      stock,
      url_imagen: urlImagen,
      id_sub_categoria: subCategoria
    }, {
      headers: {
        'Authorization': `Bearer ${token.current}`
      }
    });
    
    setNombre('');
    setSku('');
    setDescripcion('');
    setPrecio(0);
    setStock(0);
    setUrlImagen('');
    setCategoria(categorias[0]?.id_categoria || 0);

    setIdProducto(0);

    setShowEditForm(false);

    const result = await axios.get(`${VITE_URL_BACKEND}/productos`);

    setProductos(result.data);
  };

  const handleEliminarProducto = async () => {
    console.log('Id producto', idProducto);

    await axios.delete(`${VITE_URL_BACKEND}/productos/${idProducto}`, {
      headers: {
        'Authorization': `Bearer ${token.current}`
      }
    });
    
    setIdProducto(0);

    setShowDeleteForm(false);

    const result = await axios.get(`${VITE_URL_BACKEND}/productos`);

    setProductos(result.data);
  };

  const cancelarEliminarProducto = () => {
    setIdProducto(0);

    setShowDeleteForm(false);
  };

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: VITE_AUTH0_AUDIENCE
          }
        });
    
        token.current = accessToken;
      } catch (error) {
        if ( error?.response?.status === 401 ) {
          console.error('El usuario actual no esta autorizado para acceso al sitio.');
          logout({ logoutParams: { returnTo: VITE_URL_FRONTEND } });
        } else {
          console.error(error);
        }
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently]);

  useEffect(() => {
    getProductos();
    getCategorias();
  }, []);

  // busca las subcategorias de la primer categoria recibida desde el inicio
  useEffect(() => {
    setCategoria(categoria || categorias[0]?.id_categoria || 0);
    getSubCategorias();
  }, [ categorias ]);

  useEffect(() => {
    getSubCategorias();
  }, [ categoria ]);

  useEffect(() => {
    setSubCategoria(subCategoria || subCategorias[0]?.id_sub_categoria || 0);
  }, [ subCategorias ]);

  const getCategorias = async () => {
    const result = await axios.get(`${VITE_URL_BACKEND}/categorias`);

    console.log('categorias', result.data);
    setCategorias(result.data);
  };

  const getSubCategorias = async () => {
    const result = await axios.get(`${VITE_URL_BACKEND}/categorias/${categoria}/subcategorias`);

    console.log('subcategorias', result.data.subCategorias);
    setSubCategorias(result.data.subCategorias);
  };

  const getProductos = async () => {
    await axios(`${VITE_URL_BACKEND}/productos`).then(res=>{
      setProductos(res.data)
      console.log(res.data, '->data admin');
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <AdminContainer>
      <SectionTittle>
        <Adminh2>Admin</Adminh2>
      </SectionTittle>

      <button className='agregarproductobtn' onClick={toggleForm} >Agregar Producto</button>

      { showForm && (
        <>
          <div className='agregarProductoformulario'>
            <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='nombre' />
            <input type='text' value={sku} onChange={(e) => setSku(e.target.value)} placeholder='sku' />
            <input type='text' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='descripcion' />
            <input type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='precio' />
            <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} placeholder='stock' />
            <NuevoUploadWidget setUrlImagen={setUrlImagen} />
          </div>
          <div>
            <label>Categoria</label>
            <select
              value={categoria || categorias[0]?.id_categoria}
              onChange={e => { setCategoria(e.target.value) }}
            >
              {categorias.map(item => (
                <option value={item.id_categoria} key={item.id_categoria}>{item.id_categoria} {item.nombre}</option>
              ))}
            </select>
            <label>Subcategoria</label>
            <select
              value={subCategoria || subCategorias[0]?.id_sub_categoria}
              onChange={e => setSubCategoria(e.target.value)}
            >
              {subCategorias.map(item => (
                <option value={item.id_sub_categoria} key={item.id_sub_categoria}>{item.id_sub_categoria} {item.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            {/* Otros campos del formulario */}
            <button onClick={handleGuardarProducto}>Guardar Producto</button>
          </div>
        </>
      )}

      { showEditForm && (
        <>
          <div className='agregarProductoformulario'>
            <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='nombre' />
            <input type='text' value={sku} onChange={(e) => setSku(e.target.value)} placeholder='sku' />
            <input type='text' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='descripcion' />
            <input type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='precio' />
            <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} placeholder='stock' />
            <NuevoUploadWidget setUrlImagen={setUrlImagen} />
          </div>
          <div>
            <label>Categoria</label>
            <select
              value={categoria || categorias[0]?.id_categoria}
              onChange={e => { setCategoria(e.target.value) }}
            >
              {categorias.map(item => (
                <option value={item.id_categoria} key={item.id_categoria}>{item.id_categoria} {item.nombre}</option>
              ))}
            </select>
            <label>Subcategoria</label>
            <select
              value={subCategoria || subCategorias[0]?.id_sub_categoria}
              onChange={e => setSubCategoria(e.target.value)}
            >
              {subCategorias.map(item => (
                <option value={item.id_sub_categoria} key={item.id_sub_categoria}>{item.id_sub_categoria} {item.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            {/* Otros campos del formulario */}
            <button onClick={handleModificarProducto}>Guardar Producto Modificado</button>
          </div>
        </>
      )}

      { showDeleteForm && (
        <div>
          <p>Deseas borrar el producto?</p>
          <button type="button" onClick={handleEliminarProducto}>Borrar</button>
          <button type="button" onClick={cancelarEliminarProducto}>Cancelar</button>
        </div>
      )}

      <TableContainer>
        <thead>
          <Tabletr>
            <Tableth>NOMBRE</Tableth>
            <Tableth>DESCRIPCION</Tableth>
            <Tableth>ACCIONES</Tableth>
          </Tabletr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Tabletr key={producto.id_producto}>
              <TableTd>{producto.nombre}</TableTd>
              <TableTd>{producto.descripcion}</TableTd>

              <TableButtons>
                <BtnEditar onClick={() => toggleEditForm(producto)}>Editar</BtnEditar>
                <BtnEliminar onClick={() => toggleDeleteForm(producto)}>Eliminar</BtnEliminar>
              </TableButtons>
            </Tabletr>
          ))}
        </tbody>
      </TableContainer>
    </AdminContainer>
  );
};

export default Admin;