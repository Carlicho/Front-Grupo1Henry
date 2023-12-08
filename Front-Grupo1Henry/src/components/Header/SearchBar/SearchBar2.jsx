
import { useState } from 'react';
import styles from './Searchbar.module.css'
import { useNavigate } from 'react-router-dom';





const SearchBar2 = ({setResults}) => {
  const navigate = useNavigate();

    const [input,setInput] = useState("");

    const fetchData = (value)=>{
        fetch("http://localhost:3001/productos").then((response)=>response.json()
        .then((json) =>{
          const results = json.filter((product)=>{
            return  value && 
            product &&
            product.nombre &&
            product.nombre.toLowerCase().includes(value)

          })
          console.log(results)
          
          setResults(results)
        }))
            .then
            console.log(value)
    }

    const SearchHandleChange = (value) => {
        setInput(value)
        fetchData(value)
    }




return (
    <div >
        <div className={styles.inputBox}>
          <input
            placeholder='Buscador' 
            className={styles.searchInput}
            value={input}
            onChange={(e)=>{ SearchHandleChange(e.target.value)}}
          />
          <button onClick={()=>{
                        navigate("/searchresults")
                    }}>Buscar</button>
        </div>
    </div>

  )
}

export default SearchBar2