import React from "react";
import "./History.scss";
const History = (props) => {
  return (
    <div className="history-wrapper">
      <h2 className="history-heading">History</h2>
      <div className="history-box">
        <div className="history-income-expense history-income">
          <div className="history-des">Sell Pc</div>
          <div className="history-price">+$300</div>
          <div className="history-del-btn">X</div>
        </div>
        <div className="history-income-expense history-income">
          <div className="history-des">Sell Pc</div>
          <div className="history-price">+$30</div>
          <div className="history-del-btn">X</div>
        </div>
        <div className="history-income-expense history-expense">
          <div className="history-des">Buy new Car</div>
          <div className="history-price">-$300</div>
          <div className="history-del-btn">X</div>
        </div>
      </div>
    </div>
  );
};

export default History;
