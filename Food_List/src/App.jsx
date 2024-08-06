import './App.css'
import Container from './components/Container'
import TodoHeading from './components/TodoHeading'
import FoodInput from './components/FoodInput'
import FoodItems from './components/FoodItems'
import { useState } from 'react'

function App() {
  let [foodItem, setFoodItem] = useState(['grapes', 'blueberry', 'apple', 'mango']) //this here is calling pooling/lifting the states up which means we can now share/pass down the states to children components directly it is not used though bcoz every time it repaints all of the components will be repainted
  return (
    <>
      <Container>
          <TodoHeading></TodoHeading>
          <FoodInput foodItem={foodItem} setFoodItem={setFoodItem}></FoodInput>
          <FoodItems foodItem={foodItem}></FoodItems>
      </Container>
    </>
  )
}

export default App
