import React, { useState } from 'react'
import {
    Dropdown,
    DropdownBtn,
    DropdownContent,
    DropdownItem
} from './ProductCategories.styled' 

const ProductCategories = () => {
    const [dropDown, setDropDown] = useState(false)
    const [showCategories, setShowCategories] = useState([
        'Notebooks',
        'Monitores',
        'Perifericos'
    ])
    
    const isActiveDropdown = () => {
        setDropDown(!dropDown)
    }
  return (

    <Dropdown >
        <DropdownBtn onClick={isActiveDropdown}>Categorias</DropdownBtn>
        {
            dropDown ? (
                <DropdownContent>
                    {
                        showCategories.map((item => {
                            console.log(item, 'ga');
                            return (
                                <DropdownItem>
                                    {
                                        item
                                    }
                                </DropdownItem>
                            )
                        }))
                    }
                </DropdownContent> 
                ) : ('') 
        }
        
    </Dropdown>
  )
}

export default ProductCategories