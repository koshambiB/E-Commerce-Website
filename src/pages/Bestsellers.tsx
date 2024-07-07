import React from 'react'
import './Bestsellers.css'
import Item from '../components/Item'
import bestselling_product from '../assets/Bestselling_products'
const Bestsellers = () => {
  return (
    <div className='bestsellers'>
        <h1>Bestsellers</h1>
        <p>Can't decide? See what's flying off the shelves! </p>
        <div className="bestseller-products">
          {bestselling_product.map((item,index)=>{
            return  (<Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} />);
          })}
        </div>
    </div>
  );
}

export default Bestsellers;