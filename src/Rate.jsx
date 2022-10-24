import React from "react";
import "./rate.scss";

export default class Rate extends React.Component {
  render() {
    const { name, price, trafficValue, color, isSelected } = this.props;

    const classRate = isSelected ? "rate__card-selected" : "rate__card";
    return (
      <div className={`rate__card ${classRate}`}>
        <div className={`card__header ${color.card__header_color} `}>
          <p>{`Безлимитный ${name}`}</p>
        </div>
        <div className={"card__price " + `${color.card__price_color}`}>
          <p>
            <span className="small_up">руб</span>
            {`${price}`}
            <span className="small_down">/мес</span>
          </p>
        </div>
        <div className="card__trafficValue">
          <p>{`до ${trafficValue} Мбит/сек`}</p>
        </div>
        <div className="card__text">
          Объем включенного <br /> трафика не ограничен
        </div>
      </div>
    );
  }
}
