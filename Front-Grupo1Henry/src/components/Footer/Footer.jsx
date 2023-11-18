import React from 'react'
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
  LogosGeneralContainerFooter
} from './Footer'

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
                <ButtonFooter>
                  Ayuda
                </ButtonFooter>
                  Si tenés sugerencias o comentarios,
                  contactanos
              </WrapperContent>
            </SeparateVertical>
          </ContainerWrapperContent>

        <ContainerWrapperContent>
          <SeparateVertical>
            <WrapperContent>
              <ButtonJobFooter>
                ¡Trabajá con nosotros! 
              </ButtonJobFooter>
              <ButtonContactFooter>
                Botón de arrepentimiento 
              </ButtonContactFooter>
            </WrapperContent>
          </SeparateVertical>
        </ContainerWrapperContent>

        <ContainerWrapperContent>
          <SeparateVertical>
            <LogosGeneralContainerFooter src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="youTube" />
            Seguinos
          </SeparateVertical>
        </ContainerWrapperContent>
      </ContainerFlex>
    </ContainerGeneralFooter>
  )
}

export default Footer