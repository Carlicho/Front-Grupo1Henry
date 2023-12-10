import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import {
    Dropdown,
    DropdownBtn,
    DropdownContent,
    DropdownItem,
    TextCategories
} from './ProductCategories.styled' 
import Notebooks from './Notebooks/Notebooks'
import Perfiericos from './Perifericos/Perfiericos'
import Monitores from './Monitores/Monitores'

const ProductCategories = () => {

    const navigate = useNavigate();

    const [dropDown, setDropDown] = useState(false)
    const isActiveDropdown = () => {
        setDropDown(!dropDown)
    }
  return (

    <Dropdown >
        <DropdownBtn onClick={isActiveDropdown}>
            <TextCategories>
                Categorias
            </TextCategories>
            <FontAwesomeIcon icon={faArrowDown} style={{paddingRight: '5%', color: 'orange'}}/>
        </DropdownBtn>
        {
            dropDown ? (
                <DropdownContent>
                    <DropdownItem>
                    <button onClick={()=>{
                        navigate("/monitores")
                    }}>
                        Monitores
                        </button>
                    </DropdownItem>
                    <DropdownItem>
                    <button onClick={()=>{
                        navigate("/notebooks")
                    }}>
                        Notebooks
                        </button>
                    </DropdownItem>
                    <DropdownItem>
                    <button onClick={()=>{
                        navigate("/perifericos")
                    }}>
                        Perifericos
                        </button>
                    </DropdownItem>
                </DropdownContent> 
                ) : ('') 
        }
        
    </Dropdown>
  )
}

export default ProductCategories