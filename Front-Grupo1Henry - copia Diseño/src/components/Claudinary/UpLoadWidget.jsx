import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const {
    VITE_URL_BACKEND,
    VITE_CLOUDINARY_CLOUD_NAME,
    VITE_CLOUDINARY_UPLOAD_PRESET,
    VITE_AUTH0_AUDIENCE,
    VITE_URL_FRONTEND
} = import.meta.env;

const UpLoadWidget = ({ idProducto }) => {
    const { getAccessTokenSilently, logout } = useAuth0();
    const token = useRef();

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

    const widgetRef = useRef();

    useEffect(() => {
        widgetRef.current = window.cloudinary.createUploadWidget({
            cloudName: VITE_CLOUDINARY_CLOUD_NAME,
            uploadPreset: VITE_CLOUDINARY_UPLOAD_PRESET,
            multiple: false
        }, async function(error, result) {
            if ( error ) {
                console.log('Cloudinary error: ', error);
                return;
            }

            //console.log('Cloudinary result: ', result);

            if ( result.event === 'queues-end' ) {
                // o secure_url
                const { url, secure_url } = result.info.files[0].uploadInfo;

                const producto = await axios.get(`${VITE_URL_BACKEND}/productos/${idProducto}`);

                await axios.put(`${VITE_URL_BACKEND}/productos/${idProducto}`, {
                    ...producto.data,
                    url_imagen: url
                }, {
                    headers: { 'Authorization': `Bearer ${token.current}` }
                });
            }
        })
    }, []);

    return (
        <button onClick={()=>widgetRef.current.open()}>
            Subir Imagen
        </button>
    );
}

export default UpLoadWidget