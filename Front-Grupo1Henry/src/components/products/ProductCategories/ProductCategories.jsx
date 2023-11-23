import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import {
    Dropdown,
    DropdownBtn,
    DropdownContent,
    DropdownItem,
    TextCategories
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
        <DropdownBtn onClick={isActiveDropdown}>
            <TextCategories>
                Categorias 
            </TextCategories>
            <FontAwesomeIcon icon={faArrowDown} style={{paddingRight: '5%', color: 'orange'}}/>
        </DropdownBtn>
        {
            dropDown ? (
                <DropdownContent>
                    {
                        showCategories.map((item => {
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