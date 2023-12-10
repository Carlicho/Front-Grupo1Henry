import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import {
    ContainerInputs,
    Dropdown,
    DropdownBtn,
    Inputs,
    TextCategories
} from './ProductFilterPrice.styled' 

const ProductCategories = () => {
    const [dropDown, setDropDown] = useState(false)

    const isActiveDropdown = () => {
        setDropDown(!dropDown)
    }
  return (

    <Dropdown >
        <DropdownBtn onClick={isActiveDropdown}>
            <TextCategories>
                Precio
            </TextCategories>
            <FontAwesomeIcon icon={faArrowDown} style={{paddingRight: '5%', color: 'orange'}}/>
        </DropdownBtn>
        {
            dropDown ? (
                <ContainerInputs>
                    <Inputs placeholder='$ Mínimo'/>
                    <Inputs placeholder='$ Máximo'/>
                </ContainerInputs>) : ('') 
        }
        
    </Dropdown>
  )
}

export default ProductCategories