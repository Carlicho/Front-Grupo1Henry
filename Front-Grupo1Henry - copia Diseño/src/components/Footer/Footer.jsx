import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { 
  ContainerGeneralFooter,
  ContainerFlex,
  SeparateVertical,
  ContainerWrapperContent,
  ContainerLogo,
  WrapperContent,
  ButtonFooter,
  ButtonContactFooter,
  ButtonJobFooter,
  ContainerButtons,
  ContainerFollowme,
  ContainerLogos,
  LogosContact
} from './Footer.styled'

const Footer = () => {
    return (
        <ContainerGeneralFooter>
          <ContainerFlex>
            <ContainerWrapperContent>
                <ContainerLogo src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="logo" />
            </ContainerWrapperContent>
    
              <ContainerWrapperContent>
                <SeparateVertical>
                  <WrapperContent>
                    <ContainerButtons>
                      <ButtonFooter>
                        Ayuda
                      </ButtonFooter>
                    </ContainerButtons>
                      Si tenés sugerencias o comentarios,
                      contactanos
                  </WrapperContent>
                </SeparateVertical>
              </ContainerWrapperContent>
    
            <ContainerWrapperContent>
              <SeparateVertical>
                <WrapperContent>
                  <ContainerButtons>
                    <ButtonJobFooter>
                      ¡Trabajá con nosotros! 
                    </ButtonJobFooter>
                    <ButtonContactFooter>
                      Botón de arrepentimiento 
                    </ButtonContactFooter>
                  </ContainerButtons>
                </WrapperContent>
              </SeparateVertical>
            </ContainerWrapperContent>
    
            <ContainerWrapperContent>
              <SeparateVertical>
                <ContainerFollowme>
                  Seguinos en
                </ContainerFollowme>
                <ContainerLogos>
                  <LogosContact>
                    <FontAwesomeIcon icon={faCoffee} />                
                  </LogosContact>
                  <LogosContact>
                    <FontAwesomeIcon icon={faCoffee} />                
                  </LogosContact>
                  <LogosContact>
                    <FontAwesomeIcon icon={faCoffee} />                
                  </LogosContact>
                  <LogosContact>
                    <FontAwesomeIcon icon={faCoffee} />                
                  </LogosContact>
                </ContainerLogos>
              </SeparateVertical>
            </ContainerWrapperContent>
          </ContainerFlex>
        </ContainerGeneralFooter>
      )
}

export default Footer