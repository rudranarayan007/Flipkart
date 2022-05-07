import React from 'react'
import "./Carousel.css";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from './data';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sbi from "../Asset/Image/sbi.png"; 
const PreviousBtn =(props) => {
    console.log(props);
    const {className, onClick} = props
    return(
<div className={className} onClick = {onClick}> 
<ArrowBackIosIcon style = {{color: 'black' , fontWeight: '900'}}/>
</div>
    )
}
const NextBtn =(props) => {
 
    const {className, onClick} = props
    return(
      <div className={className} onClick = {onClick}>
          <ArrowForwardIosIcon style = {{color: 'black', fontWeight: '900'}}/>
      </div>  
    )
}

const Carousel = () => {
  return (
    <div  style = {{ margin: "20px"}}>
     
        <Slider autoplay = {true} autoplaySpeed = {600} 
        prevArrow = { <PreviousBtn/>}
        nextArrow = {<NextBtn/>}>
            {
                data.map(item=>(
                    <div > 
                    <img src={item}  style = {{width:'100%', height:'40vh'}}/>
                </div> 
                ))
            }


        </Slider>

        <div className='offer'> 
     <img  src = {sbi}/>
     </div>
    </div>
  )
}

export default Carousel;