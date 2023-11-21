import React, { useState } from 'react'
import {
    Dropdown,
    DropdownBtn,
    DropdownContent,
    DropdownItem
} from './ProductCategories.styled' 

const ProductCategories = () => {
    const [dropDown, setDropDown] = useState(false)
    const isActiveDropdown = () => {
        setDropDown(!dropDown)
    }
  return (

    <Dropdown >
        <DropdownBtn onClick={isActiveDropdown}>Categorias</DropdownBtn>
        {
            dropDown ? (
                <DropdownContent>
                    <DropdownItem>
                        Notebooks
                    </DropdownItem>
                    <DropdownItem>
                        Monitores
                    </DropdownItem>
                    <DropdownItem>
                        Perifericos
                    </DropdownItem>
                </DropdownContent> 
                ) : ('') 
        }
        
    </Dropdown>
  )
}

export default ProductCategories