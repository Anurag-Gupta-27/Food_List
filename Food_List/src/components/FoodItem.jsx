import React from "react";
import Item from "./Item";
import styles from "./FoodItem.module.css";

const FoodItem = ({ foodItems }) => {
  return (
    <div>
      {foodItems.length > 0 &&
        foodItems.map((item) => <Item key={item} item={item}></Item>)}
      {foodItems.length == 0 && (
        <span className={styles.hungryText}>I am Hungry Pls Add Some </span>
      )}
    </div>
  );
};

export default FoodItem;
