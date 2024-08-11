import React from "react";
import "./CardSectiom.css";
import TravelSection from "../TravelSection/TravelSection";



function CardSection(props) {
    console.log(props);
    {props.people && (<div> {props.people} </div>)}
  return (
    
    <div className="allCard">
        <img src ={props.img} alt="" className="img"/>
        <div className="position-card">
          <div className="flex-card">
          <div className="transports" >{props.transportName} </div>
          <div className="transports__people">{props.people} {props.peopleNum}</div>

          </div>
        </div>
    
        <p className="title">{props.title} {props.price}</p>
        
    </div>
 

   )}

export default CardSection;
