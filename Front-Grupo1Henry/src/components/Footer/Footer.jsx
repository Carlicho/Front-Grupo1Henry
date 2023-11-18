import React from 'react'
import { 
  ContainerGeneralFooter,
  ContainerFlex,
  SeparateVertical,
  ContainerWrapperContent,
  ContainerLogo
} from './Footer'

const Footer = () => {
  return (
    <ContainerGeneralFooter>
      <ContainerFlex>
        <SeparateVertical>
          <ContainerLogo src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="logo" />
        </SeparateVertical>
        <SeparateVertical>
          ayuda
        </SeparateVertical>
        <SeparateVertical>
          trabaja con nosotros
        </SeparateVertical>
        <SeparateVertical>
          Seguinos
        </SeparateVertical>
      </ContainerFlex>
    </ContainerGeneralFooter>
  )
}

export default Footer