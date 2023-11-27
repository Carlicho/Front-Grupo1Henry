
import styled from 'styled-components'

import styles from './index.module.css'
import Sliders from './Slider.jsx/Sliders';




const Index = () => {

  const ImgContainer = styled.div`
    width: 1200px;
    height: 1200px;
    margin: 0 auto;
  `
    

    
  return (
    <div className={styles.maincontainer}>
        <ImgContainer >
            <Sliders/>

        </ImgContainer>
    </div>
  )
}

export default Index