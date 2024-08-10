import React from "react";
import photo1 from "../../assets/1.png";
import photo2 from "../../assets/2.png";
import photo3 from "../../assets/3.png";
import photo4 from "../../assets/4.png";
import CardSection from '../CardSection/CardSection';

const cities = [
    {
        img: photo1,
        title: "Тбилиси, апрель —",
        price: 83000
    },
    {
        img: photo2,
        title: "Стамбул, март —",
        price: 110000
    },
    {
        img: photo3,
        title: "Дубай, июнь —",
        price: 220000
    },
    {
        img: photo4,
        title: "Пхукет, сентябрь — ",
        price: 135000
    }
];

function TravelSection() {

    return (
        <div>
            {cities.map(city => (
                <CardSection
                img={city.img} 
                title={city.title} 
                price={city.price}
                 />
            ))}
        </div>
    );
}

export default TravelSection;