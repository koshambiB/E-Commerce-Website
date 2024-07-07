import React from 'react'
import './Home.css'
import Banner1 from '../assets/banner-home.png'
import product5 from '../assets/product-5.png'
import product2 from '../assets/product-2.png'
import product4 from '../assets/product-4.png'
import product1 from '../assets/product-1.png'
import product3 from '../assets/product-3.png'
import product6 from '../assets/product-6.png'
import product7 from '../assets/product-7.png'
import urbanchic from '../assets/urban-chic.png'
import cottage from '../assets/cottage-cute.png'
import nightout from '../assets/night-out.png'
import minimal from '../assets/minimal-casual.png'
const Home = () => {
  return (
    <>
    <div className="slider-frame">
          <img src={Banner1}/>
    </div>
    <div className="bestseller">
        <p className="heading">Bestsellers</p>
        <div className="products">
          <div className="product-1">
            <img src={product1}/>
            <div className="product-description">
              <p className='text'>Drawstring mesh cover-up tube top</p>
              <p className="price">$ 40</p>
            </div>
          </div>
          <div className="product-2">
          <img src={product2}/>
          <div className="product-description">
              <p className="text">Waist shaping corset midi sundress</p>
              <p className="price">$ 350</p>
            </div>
          </div>
          <div className="product-3">
          <img src={product6}/>
          <div className="product-description">
              <p className="text">Nymphea drawstring corset with bell sleeves</p>
              <p className="price">$ 198</p>
            </div>
          </div>
          <div className="product-4">
          <img src={product3}/>
          <div className="product-description">
              <p className="text">Strappy green midi sundress</p>
              <p className="price">$ 150</p>
            </div>
          </div>
          <div className="product-5">
          <img src={product5}/>
          <div className="product-description">
              <p className="text">Flared vintage washed denim jeans</p>
              <p className="price">$ 118</p>
            </div>
          </div>
          <div className="product-6">
          <img src={product4}/>
          <div className="product-description">
              <p className="text">Washed denim vintage co-ords set</p>
              <p className="price">$ 290</p>
            </div>
          
          </div>
          <div className="product-7">
          <img src={product7}/>
          <div className="product-description">
              <p className="text">Velvet red off-shoulder mini dress</p>
              <p className="price">$ 138</p>
            </div>
          </div>
        </div>
    </div>
    <div className="mood">
      <p className='heading'>What's your mood?</p>
      <div className="mood-pick">
        <div className="picks">
          <img src={urbanchic}/>
          <p className='one'>Urban Chic</p>
        </div>
        <div className="picks">
          <img src={cottage}/>
          <p className='two'>Elegant & Cute</p>
        </div>
        <div className="picks">
          <img src={nightout}/>
          <p className='three'>Night Out</p>
        </div>
        <div className="picks">
          <img src={minimal}/>
          <p className='four'>Minimal & Casual</p>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Subscribe to our newsletter </p>
      <div>
      <input type='text' placeholder='Enter your email'/>
      <button className='subscribe'>Subscribe</button>
      </div>
    </div>
    </>
  );
}

export default Home;