import React from "react";
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button} from "antd";


function AddFoodForm (props) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('0');
    const [image, setImage] = useState('');
    const [servings, setServings] = useState('0');

    const handleNameInput = (e) => setName (e.target.value);
    const handleCaloriesInput = (e) => setCalories (e.target.value);
    const handleImageInput = (e) => setImage (e.target.value);
    const handleServingsInput = (e) => setServings (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, calories, image, servings};
        console.log('submitted: ', newFood);
        props.addFoodForm(newFood);
    }

    return (
        <div className="AddBox">
           <Divider>
           Add a Box
           </Divider>
           <form onSubmit={handleSubmit}>
           <label>Food Name:</label>
           <Input
                type='text'
                name="name"
                value={name}
                onChange={handleNameInput}
            ></Input>
           <label>Calories:</label>
           <Input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}
           />
           <label>Image:</label>
           <Input
               type="img"
               name="image"
               value={image}
               onChange={handleImageInput}
           />
           <label>Servings:</label>
           <Input
               type="number"
               name="servings"
               value={servings}
               onChange={handleServingsInput}
           />
           <button type="submit">Add a Box</button>
           </form>
        </div>
    );
}

export default AddFoodForm;

// "name"
// "calories"
// "image"
// "servings"