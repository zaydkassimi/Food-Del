import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {

    const[itemCount,setItemCount] = useState(0)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!itemCount
            ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.addwhite} alt="" />
            : <div className="div-food-item-counter">
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.addgreen} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.ratingstars} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
        
      </div>
    </div>
  )
}

export default FoodItem
