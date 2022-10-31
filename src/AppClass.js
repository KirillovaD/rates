import "./App.css";
import RateClass from "./RateClass";

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
  },
  {
    name: 450,
    price: 450,
    trafficValue: 50,
    color: color2,
  },
  {
    name: 550,
    price: 550,
    trafficValue: 100,
    color: color3,
  },
  {
    name: 1000,
    price: 1000,
    trafficValue: 200,
    color: color4,
  },
];
console.log(rates.color);
function AppClass() {
  return (
    <div className="App">
      <h1>Классовый компонент</h1>
      <div className="container">
        {rates.map((rate) => (
          <RateClass
            color={rate.color}
            name={rate.name}
            price={rate.price}
            trafficValue={rate.trafficValue}
          />
        ))}
      </div>
    </div>
  );
}

export default AppClass;
