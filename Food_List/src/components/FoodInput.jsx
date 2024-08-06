import React, { useState } from "react";
import styles from './FoodInput.module.css'

const FoodInput = ({foodItem, setFoodItem}) => {
  let [food, setFood] = useState("");
  
  const handleKeyUp = (ev) => {
    if(ev.key=='Enter'){
      let newFoodList = [...foodItem, food];
      console.log(`${food} added`)
      setFoodItem(newFoodList)
      ev.target.value = ""
    }
  }

  return (
    <div>
      <input type="text" placeholder="enter food item here" className={styles.foodInput} onChange={(ev) => setFood(ev.target.value)} onKeyUp={(ev) => handleKeyUp(ev)}/>
    </div>
  );
};

export default FoodInput;
