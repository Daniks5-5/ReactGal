import React from "react";
import "./CardSectiom.css";
import Transport from "../Transport/Transport";



function CardSection(props) {
    console.log(props);
  return (
    <div className="allCard">
        <img src ={props.img} alt="" className="img"/>
        <div className="transports" >{props.transportName}</div>
        <p className="title">{props.title} {props.price}</p>
        
    </div>
 

   )}

export default CardSection;
