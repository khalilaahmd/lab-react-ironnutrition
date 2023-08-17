import React from "react";
import { useState } from "react";
import FoodCard from "./FoodCard";
import AddFoodForm from "./AddFoodForm";
import foodsData from "../foods.json";
import SearchBar from "./SearchBar";
import { Button } from "antd";


function FoodList () {
    const [foods, setFoods]  = useState(foodsData);
    const [allfoodsData, setFoodsData] = useState(foodsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState (false);

    const addNewFoodForm = (food) => {
        const updatedFoodForms = [...foods, food];
        const updatedFoodData = [...allfoodsData, food];
    
        setFoods(updatedFoodForms);
        setFoodsData(updatedFoodData);
    };



        const filterFoodList = () => {
            return foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }      

    return (
        <div>
            <h2>Food List</h2>
            <Button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Add New Food"}</Button>
            {showForm && <AddFoodForm addFoodForm={addNewFoodForm} />}
            {/* <AddFoodForm addFoodForm={addNewFoodForm} /> */}
            <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
            {foods.length >0 ? (
                filterFoodList().map(food => {
                return <FoodCard key={food.name} food={food} />
            })
            ) : (
                <p>Oops! There is no more content to show.</p>
            )}
        </div>
    );
}

export default FoodList; 

// "name"
// "calories"
// "image"
// "servings"