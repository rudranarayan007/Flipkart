import React from "react";
import "./Footer.css";
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import RedeemIcon from '@mui/icons-material/Redeem';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import creditcard from "../Asset/Image/creditcard.jpg";
export default function Footer() {
  return (
      <div>
    <div className="Footer">
      <div className="one">
        <p>
          <span> ABOUT </span> <br />
          Contact Us <br />
          About Us <br />
          Careers <br />
          Flipkart Stories <br />
          Press <br />
          Flipkart Wholesale <br />
          Corporate Information
          <br />
          HELP
        </p>
      </div>
      <div className="two"> 
      <p>
        <span> HELP </span> <br />
        Payment <br />
        Shipping <br />
        Cancellation & Return <br />
        FAQ <br />
        Report Infriqment <br />
       
      </p>
      </div>
     
      <div className="three">
        <p>
          <span> POLICY </span> <br />
          Return Policy  <br />
          Terms Of Use <br />
          Security<br />
          Privacy<br />
          Sitemap <br />
          EPR Compliances <br />
        </p>
      </div>
      <div className="four">
        <p>
          <span> SOCIAL </span> <br />
          Facebook<br />
          Twitter <br />
          Youtube <br />
        </p>
      </div>
      <div className="verticaldivider"> </div>
      <div className="five">
        {" "}
        <p>
          <span> Mail US </span> <br />
          Flipkart Internet Private Limited, <br/>

Buildings Alyssa, Begonia &   <br/>

Clove Embassy Tech Village,  <br/>

Outer Ring Road, Devarabeesanahalli Village,  <br/>

Bengaluru, 560103,  <br/>

Karnataka, India  <br/>
        </p>
      </div>
      <div className="six">
        {" "}
        <p>
          <span> Registered Office Address: </span> <br />
          Flipkart Internet Private Limited, <br/>

Buildings Alyssa, Begonia &  <br/> 

Clove Embassy Tech Village, <br/>

Outer Ring Road, Devarabeesanahalli Village,<br/>
 
Bengaluru, 560103,<br/>

Karnataka, India<br/>

CIN : U51109KA2012PTC066107 <br/>

Telephone: 1800 202 9898 <br/>
        </p>
      </div>

    </div>
    <div className="divider"> </div>
   <div className="shortcuts"> 

   <div className="work"> <WorkIcon style = {{ color: "yellow", }}/> 
   <p> Become a Seller</p>
   </div>
 
   <div className="ad"> <StarsIcon style = {{ color: "yellow", }}/> 
   <p>Advertise</p>
   </div>
   <div className="gift"> <RedeemIcon style = {{ color: "yellow", }}/> 
   <p> Gift Cards</p>
   </div>
   <div className="help"> <PrivacyTipIcon style = {{ color: "yellow", }}/> 
   <p> Help Center</p>
   </div>
   <div className="web"> 
   <p>© 2007-2022 Flipkart.com</p>
   </div>
   <div className="creditcard"> 
       <img src={creditcard}/>
   </div>
   </div>
    </div>
  );
}
