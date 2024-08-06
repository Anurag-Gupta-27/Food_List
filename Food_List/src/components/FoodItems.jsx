import React from 'react'
import FoodItem from './FoodItem'

const foodItems = ({foodItem}) => {
  return (
    <div>
      <FoodItem foodItems={foodItem}></FoodItem>
    </div>
  )
}

export default foodItems
