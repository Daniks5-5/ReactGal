import React from "react";
import "./CardSectiom.css";



function CardSection(props) {
    console.log(props);
  return (
    <div className="allCard">
        <img src ={props.img} alt="" className="img"/>
        <p className="title">{props.title} {props.price}</p>
        
    </div>
 

   )}

export default CardSection;
