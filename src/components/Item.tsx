import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='Item'>
        <img src={props.image}/>
        <div className="item-description">
              <p className='text'>{props.name}</p>
              <p className="price">$ {props.price}</p>
        </div>
    </div>
  )
}

export default Item