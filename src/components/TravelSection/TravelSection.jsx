import React from "react";
import photo1 from "../../assets/1.png";
import photo2 from "../../assets/2.png";
import photo3 from "../../assets/3.png";
import photo4 from "../../assets/4.png";
import CardSection from '../CardSection/CardSection';
import "./TravelSection.css";

const cities = [
    {
        img: photo1,
        transportName: 'на автобусе',
        title: "Тбилиси, апрель —",
        price: 83000
    },
    {
        img: photo2,
        transportName: 'на самолете',
        title: "Стамбул, март —",
        price: 110000
    },
    {
        img: photo3,
        transportName: 'на самолете',
        title: "Дубай, июнь —",
        price: 220000
    },
    {
        img: photo4,
        transportName: 'самолет + паром',
        title: "Пхукет, сентябрь — ",
        price: 135000
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
                 />
            ))}
        </div>
    );
}

export default TravelSection;