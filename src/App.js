import "./App.css";
import Rate from "./Rate";
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
    isSelected: true,
  },
  {
    name: 1000,
    price: 1000,
    trafficValue: 200,
    color: color4,
  },
];
console.log(rates.color);
function App() {
  return (
    <div className="App">
      {rates.map((rate) => (
        <Rate
          isSelected={rate.isSelected}
          color={rate.color}
          name={rate.name}
          price={rate.price}
          trafficValue={rate.trafficValue}
        />
      ))}
    </div>
  );
}

export default App;
