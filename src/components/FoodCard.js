import React from "react";
import { useState } from "react";
import { Card, Row, Col, Driver, Input, Button} from "antd";
import FoodBox from "./FoodBox";

import foodsData from "../foods.json";

function FoodCard () {
    const [foods, setFoods] = useState(foodsData);

    const deleteBox = foodName => {
        const filteredFoods = foods.filter(food => {
            return food.name !== foodName;
        });

        setFoods(filteredFoods)
    }

    return (
        <div>
        {foods.map(food => {
            return <FoodBox key={food.name} food={food} clickToDelete={deleteBox}/>
        })}
        </div>
    );
}

export default FoodCard; 

// "name"
// "calories"
// "image"
// "servings"