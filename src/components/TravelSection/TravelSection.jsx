import React from "react";
import photo1 from "../../assets/1.png";
import photo2 from "../../assets/2.png";
import photo3 from "../../assets/3.png";
import photo4 from "../../assets/4.png";
import icon from "../../assets/icon.png";
import CardSection from '../CardSection/CardSection';
import "./TravelSection.css";

const cities = [
    {
        img: photo1,
        transportName: 'на автобусе',
        title: "Тбилиси, апрель —",
        price: 83000,
        people: true,
        peopleNum:10,
        icon: icon
    },
    {
        img: photo2,
        transportName: 'на самолете',
        title: "Стамбул, март —",
        price: 110000,
        people: false
    },
    {
        img: photo3,
        transportName: 'на самолете',
        title: "Дубай, июнь —",
        price: 220000,
        people: true,
        peopleNum:15,
        icon: icon
    },
    {
        img: photo4,
        transportName: 'самолет + паром',
        title: "Пхукет, сентябрь — ",
        price: 135000,
        people: true,
        peopleNum:11,
        icon: icon
    }
];

function TravelSection() {

    return (
        <div>
                <h1 className="Title">Галерея путешествий</h1>
            {cities.map(city => (
                <CardSection
                img={city.img} 
                transportName = {city.transportName}
                title={city.title} 
                price={city.price}
                people = {city.people}
                peopleNum = {city.peopleNum}
                icon = {city.icon}
                 />
            ))}
        </div>
    );
}

export default TravelSection;