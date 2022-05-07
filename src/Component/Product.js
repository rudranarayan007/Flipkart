import React from 'react'
import "./Carousel.css";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { multiData } from './data';
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

const Product = () => {
  return (
    <div  style = {{ margin: "20px"}}>
     
        <Slider  
        prevArrow = { <PreviousBtn/>}
        nextArrow = {<NextBtn/>}
        slidesToShow = {5}
        slidesToScroll= {3}>
            {
                multiData.map(item=> (
              <Card item ={ item}/>
                ))
            }


        </Slider>

        <div className='offer'> 
     <img  src = {sbi}/>
     </div>
    </div>
  );
};

const Card=({item}) => {
    return(
        <div style={{textAlign: 'center'}}> 
         <img className='image_zoom' src={item} alt ="" style={{ width: "100%", height: "250px", objectFit: "contain", marginBottom: "10px"}} />
         <p style={{fontSize: '14px', padding: '5px 0'}}>SoundBars </p>
         <p style={{fontSize: '16px', padding: '5px 0', color: "green"}}>₹ 2,999</p>
         <p style={{fontSize: '14px', padding: '5px 0', color: "grey"}}>Boat Motrola & More </p>
        </div>
    )
}
export default Product;