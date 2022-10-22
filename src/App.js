import "./App.css";
import Rate from "./Rate";
import colorRate1 from "./colorRate1.scss";
import colorRate2 from "./colorRate2.scss";
import colorRate3 from "./colorRate3.scss";
import colorRate4 from "./colorRate4.scss";

const rates = [
  {
    name: 300,
    price: 300,
    trafficValue: 10,
    color: colorRate1,
  },
  {
    name: 450,
    price: 450,
    trafficValue: 50,
    color: colorRate2,
  },
  {
    name: 550,
    price: 550,
    trafficValue: 100,
    color: colorRate3,
    isSelected: true,
  },
  {
    name: 1000,
    price: 1000,
    trafficValue: 200,
    color: colorRate4,
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
