import React from 'react'
import styles from './Container.module.css'

const Container = (props) => {
  return (
    //this is called passing children as props
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Container;