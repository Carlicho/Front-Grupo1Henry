import {Slideshow, Slide, TextoSlide} from './Slideshow';
import img1 from '../../../../assets/img1.png'
import img2 from '../../../../assets/img2.png'
import img3 from '../../../../assets/img3.png'
import img4 from '../../../../assets/img4.png'






function Sliders() {



  return (
    <div >

      <Slideshow>
      <Slide>
        <div>
            <img src={img1}/>
        </div>
        <TextoSlide>   
            <p>15% de descuento en Componentes de Pc</p>
        </TextoSlide>
        </Slide>

        <Slide>
        <div>
            <img src={img2}/>
        </div>
        <TextoSlide>   
            <p>15% de descuento en Componentes de Pc</p>
        </TextoSlide>
        </Slide>

        <Slide>
        <div>
            <img src={img3}/>
        </div>
        <TextoSlide>   
            <p>15% de descuento en Componentes de Pc</p>
        </TextoSlide>
        </Slide>

        <Slide>
        <div>
            <img src={img4}/>
        </div>
        <TextoSlide>   
            <p>15% de descuento en Componentes de Pc</p>
        </TextoSlide>
        </Slide>

      </Slideshow>

    </div>
  )
}

export default Sliders;
