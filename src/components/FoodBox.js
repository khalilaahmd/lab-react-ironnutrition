import React from "react";
import { Card, Row, Col, Driver, Input, Button} from "antd";

function FoodBox (props) {
    const {food, clickToDelete} = props;

    const totalCalories = food.calories * food.servings;

    return (
        <div key={food.name}>
        <Col>
            <Card>
                <Card>
                <h3>{food.name}</h3>
                <img src={food.image} height={60} alt="food"/>
                </Card>
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                    <b>
                        Total Calories: {totalCalories}
                    </b>
                </p>
                <Button type="primary" onClick={()=> clickToDelete(food.name)} className="btn-delete"> Delete </Button>
            </Card>
        </Col>
        </div>
    );
}

export default FoodBox;

// "name"
// "calories"
// "image"
// "servings"

