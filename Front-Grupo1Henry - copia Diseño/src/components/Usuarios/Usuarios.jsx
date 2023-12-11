import { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const {
    VITE_URL_BACKEND,
    VITE_URL_FRONTEND,
    VITE_AUTH0_AUDIENCE
  } = import.meta.env;

const Usuarios = () => {
    const { user, isLoading, getAccessTokenSilently } = useAuth0();
    const [ token, setToken ] = useState('');
    const [ usuarios, setUsuarios ] = useState([]);

    useEffect(() => {
        if ( isLoading ) {
          return;
        }
    
        const getAccessToken = async () => {
          try {
            const accessToken = await getAccessTokenSilently({
              authorizationParams: {
                audience: VITE_AUTH0_AUDIENCE
              }
            });
        
            setToken(accessToken);
          } catch (error) {
              if ( error?.response?.status === 401 ) {
                console.error('El usuario actual no esta autorizado para acceso al sitio.');
                logout({ logoutParams: { returnTo: VITE_URL_FRONTEND } });
              } else {
                console.warn(error);
              }
          }
        };
    
        getAccessToken();
    }, [getAccessTokenSilently, isLoading]);

    useEffect(() => {
        if ( !token ) {
          return;
        }

        const getUsuarios = async () => {
            try {
                const result = await axios.get(`${VITE_URL_BACKEND}/usuarios`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setUsuarios(result.data);
            } catch (exception) {
              console.warn('error al obtener permisos', exception);
            }
        };
      
        getUsuarios()
    }, [ token ]);

    const handleHabilitacion = async ( usuario ) => {
        const {
            id_usuario,
            nombre_usuario,
            id_rol,
            habilitado,
            nombre_completo,
            correo
        } = usuario;

        await axios.put(`${VITE_URL_BACKEND}/usuarios/${id_usuario}`, {
            nombre_completo,
            correo,
            nombre_usuario,
            id_rol,
            habilitado: !habilitado
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const result = await axios.get(`${VITE_URL_BACKEND}/usuarios`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setUsuarios(result.data);
    };

    return (
        <div>
            <p>Usuarios</p>
            <table>
                <thead>
                    <tr>
                        <th>Nombre completo</th>
                        <th>Correo</th>
                        <th>Nombre usuario</th>
                        <th>Habilitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id_usuario}>
                            <td>{usuario.nombre_completo}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.nombre_usuario}</td>
                            <td>{ usuario.habilitado ? 'Habilitado' : 'Deshabilitado' }</td>
                            <td>
                                <button type='button' onClick={() => handleHabilitacion(usuario)}>
                                    { usuario.habilitado ? 'Deshabilitar' : 'Habilitar' }
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Usuarios;
