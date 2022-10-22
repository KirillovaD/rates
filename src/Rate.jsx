import React from "react";
import "./rate.scss";

export default class Rate extends React.Component {
  render() {
    const { name, price, trafficValue, color, isSelected } = this.props;

    const classRate = isSelected ? "rate__card-selected" : "rate__card";
    return (
      <div className={`${classRate}`}>
        <div className={color.card__header}>{`Безлимитный ${name}`}</div>
        <div className={color.card__price}>{`руб ${price} /мес `}</div>
        <div className="card__trafficValue">{`до ${trafficValue} Мбит/сек`}</div>
        <div className="card__text">
          Объем включенного <br /> трафика не ограничен
        </div>
      </div>
    );
  }
}
