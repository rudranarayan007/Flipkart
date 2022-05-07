import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header() {
  return (
    <div className='header'>
      
        
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo" />
        <div className="under">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
             
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>

      <div className="second">
          <input placeholder='Search For Products' type = "text"/>
         <SearchIcon/>
           </div>
      <div className="third"> 
      <button> Login </button></div>
      <div className="fourth">
          <span> Become a Seller </span> </div>
      <div className="fifth"> 
      <span> More </span>
      <ExpandMoreIcon/>
 
    </div>

      <div className="sixth">
      <ShoppingCartIcon/>
       <p> Cart</p> </div>
      
    </div>
  )
}
