import React from 'react'
import Carousel from './Component/Carousel';
import Categories from './Component/Categories';
import Footer from './Component/Footer';
import Header from './Component/Header';
 import Product from './Component/Product';
import Terms from './Component/Terms';



export default function App() {
  return (
    <div>

     <Header/>
     <Categories/>
     <Carousel/>
   
     <Product/>
     <Product/>
<Terms/>
<Footer/>
    </div>
  );
}
