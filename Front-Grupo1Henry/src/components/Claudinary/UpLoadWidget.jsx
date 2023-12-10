import { useEffect, useRef } from "react"

const UpLoadWidget = () => {
    const claoudinaryRef = useRef();
    const WidgetRef = useRef();
    useEffect(()=>{
        claoudinaryRef.current = window.cloudinary;
        WidgetRef.current = claoudinaryRef.current.createUploadWidget({
            cloudName:"dntcxtc9k",
            upLoadPreset:"uw_test"
        }, function(error, result){
            console.log(result)
        })
    },[])
    return (
        <button onClick={()=>WidgetRef.current.open()}>
            Subir Imagen
        </button>
    )

}

export default UpLoadWidget