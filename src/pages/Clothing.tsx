import React from 'react'
import clothing from '../assets/Clothing-products';
import Item from '../components/Item';
import './Clothing.css'
const Clothing = () => {
  return (
    <div className='clothing'>
        <h1>Clothing</h1>
        <p>Find a dress that tells your story. Shop our full collection. </p>
        <hr/>
        <div className="option">
            <div className="filter">
                FILTER
            </div>
        </div>
        <hr/>
        <div className="clothing-products">
          {clothing.map((item,index)=>{
            return  (<Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} />);
          })}
        </div>
    </div>
  );
}

export default Clothing;