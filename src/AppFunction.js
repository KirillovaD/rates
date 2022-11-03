import { useState } from "react";
import RateFunctional from "./RateFunctional";

import "./App.css";
import color1 from "./colorRate1.module.scss";
import color2 from "./colorRate2.module.scss";
import color3 from "./colorRate3.module.scss";
import color4 from "./colorRate4.module.scss";

const rates = [
  {
    name: 300,
    price: 300,
    trafficValue: 10,
    color: color1,
    id: 1,
  },
  {
    name: 450,
    price: 450,
    trafficValue: 50,
    color: color2,
    id: 2,
  },
  {
    name: 550,
    price: 550,
    trafficValue: 100,
    color: color3,
    id: 3,
  },
  {
    name: 1000,
    price: 1000,
    trafficValue: 200,
    color: color4,
    id: 4,
  },
];

function AppFunction() {
  const [selectedRateId, setSelectedRateId] = useState(0);

  return (
    <div className="App">
      <h1>Функциональный компонент</h1>
      <div className="container">
        {rates.map((rate) => (
          <RateFunctional
            id={rate.id}
            color={rate.color}
            name={rate.name}
            price={rate.price}
            trafficValue={rate.trafficValue}
            isSelected={selectedRateId === rate.id}
            onCardClick={setSelectedRateId}
          />
        ))}
      </div>
    </div>
  );
}

export default AppFunction;
