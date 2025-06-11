import { useState, useEffect } from "react";

function Course(props) {

    const [purchased, setPurchased] = useState(false);
    const discount = (props.price) - 500;

    function Clickfunction() {
        setPurchased(true);
    };
    
    return (
        props.name && (
            <div className="headContainer">
                <img src={props.image} alt="Course" />
                <h4 className="h4">{props.name}</h4>
                <p className="p">{purchased ? discount : props.price}</p>
                <button className="button" onClick={() => Clickfunction()}> Apply Coupon </button>
                <button className="button" onClick={() => props.delete(props.id)}>Delete Card</button>
            </div>
        )
    )
};

export default Course;