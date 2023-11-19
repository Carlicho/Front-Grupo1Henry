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
  ContainerButtons,
  LogosGeneralContainerFooter,
  ContainerFollowme,
  ContainerLogos
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
              <LogosGeneralContainerFooter src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="youTube" />
              <LogosGeneralContainerFooter src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="youTube" />
              <LogosGeneralContainerFooter src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="youTube" />
            </ContainerLogos>
          </SeparateVertical>
        </ContainerWrapperContent>
      </ContainerFlex>
    </ContainerGeneralFooter>
  )
}

export default Footer