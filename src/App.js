import React from 'react';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewForm from './components/NewForm';
import Search from './components/Search';
import Today from './components/Today';
import './App.css';

function App() {
  const [foodList, setFood] = useState(foods);
  const [foodCopy, setFoodCopy] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [addedFoodData, setAddedFoodData] = useState([]);

  function handleToggle() {
    setShowForm(!showForm);
  }

  function handleSumbit(event) {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      img: event.target.image.value,
      quantity: event.target.quantity.value,
    };
    setFood([newFood, ...foodList]);
    setShowForm(false);
  }

  function handleSearch(event) {
    let wordSearch = event.target.value;
    let filteredFoods = foodList.filter((food) => {
      return food.name.includes(wordSearch);
    });
    setFoodCopy(filteredFoods);
  }

  function handleAdd(food, qty) {
    let addedFood = {
      name: food.name,
      quantity: qty,
      calories: food.calories,
    };
    setAddedFoodData([addedFood, ...addedFoodData]);
  }

  return (
    <div className="App">
      <div class="columns">
        <div class="column">
          <Search btnSearch={handleSearch} />
          {!showForm ? (
            <button onClick={handleToggle}>Add Food</button>
          ) : (
            <NewForm btnSubmit={handleSumbit} />
          )}
          {foodList.map((elem) => {
            return <FoodBox food={elem} btnFood={handleAdd} />;
          })}
        </div>
        <div class="column">
          <Today addFood={addedFoodData} />
        </div>
      </div>
    </div>
  );
}

export default App;
