import { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const {
    VITE_URL_BACKEND,
    VITE_URL_FRONTEND,
    VITE_AUTH0_AUDIENCE
  } = import.meta.env;

const Perfil = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const token = useRef();

    const [ usuario, setUsuario ] = useState({});
    const [ nombreCompleto, setNombreCompleto ] = useState('');
    const [ correo, setCorreo ] = useState('');

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
        const getUsuario = async () => {
            const result = await axios.get(`${VITE_URL_BACKEND}/usuarios/${user.sub}`, {
                headers: {
                    'Authorization': `Bearer ${token.current}`
                }
            });

            setUsuario(result.data);

            setNombreCompleto(result.data.nombre_completo);
            setCorreo(result.data.correo);
            //console.log('user del db', result.data);
        };

        getUsuario();
    }, [user?.sub]);

    //console.log('usuarioooo', user);

    const handleSubmit = async () => {
        const {
            id_usuario,
            nombre_usuario,
            id_rol,
            habilitado
        } = usuario;

        await axios.put(`${VITE_URL_BACKEND}/usuarios/${id_usuario}`, {
            nombre_completo: nombreCompleto,
            correo,
            nombre_usuario,
            id_rol,
            habilitado
        }, {
            headers: {
                'Authorization': `Bearer ${token.current}`
            }
        });

        console.log('submit', nombreCompleto, correo);

        window.location.reload();
    };

    return (
        <>
            <h1>Perfil del usuario</h1>
            <div>
                <input type='text' value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} placeholder='Nombre completo' />
                <input type='text' value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder='Dirección de correo' />
            </div>
            <div>
                <button type="button" onClick={handleSubmit}>Guardar cambios</button>
            </div>
        </>
    );
};

export default Perfil;
