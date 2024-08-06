import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  const handleOnClick = () => {
    console.log(`${item} Bought`);
  };

  return (
    <div>
      <div className={styles.item}>
        {item}
        <button className={styles.buyButton} onClick={handleOnClick}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Item;
