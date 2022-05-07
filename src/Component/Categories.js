import React from "react";
import "./Categories.css";
import Mobile from "../Asset/Image/Mobile.png";
import Fashion from "../Asset/Image/Fashion.png";
import Electronics from "../Asset/Image/Electronics.png";
import Home from "../Asset/Image/Home.png";
import Travel from "../Asset/Image/Travel.png";
import Appliances from "../Asset/Image/Appliances.png";
import Furniture from "../Asset/Image/Furniture.png";
import Beauty from "../Asset/Image/Beauty.png";
import Grocery from "../Asset/Image/Grocery.png";
export default function Categories() {
  return (
    <div className="categories">
      <div className="Mobile ">
        <img src={Mobile} />
        <p> Mobile</p>
      </div>
      <div className="Fashion">
        <img src={Fashion} />
        <p> Fashion</p>
      </div>
      <div className="Electronics">
        <img src={Electronics} />
        <p> Electronics</p>
      </div>
      <div className="Home">
        <img src={Home} />
        <p>Home</p>
      </div>
      <div className="Travel">
        <img src={Travel} />
        <p> Travel</p>
      </div>
      <div className="Appliances">
        <img src={Appliances} />
        <p> Appliances</p>{" "}
      </div>

      <div className="Furniture">
        <img src={Furniture} />
        <p> Furniture</p>
      </div>
      <div className="Beauty">
        <img src={Beauty} />
        <p> Beauty</p>
      </div>
      <div className="Grocery">
        <img src={Grocery} />
        <p> Grocery</p>
      </div>
    </div>
  );
}
