import React, { useContext } from "react";
import { TransactionState } from "context/globalContext";
import "./History.scss";
const History = (props) => {
  const { Transaction,delTransaction } = useContext(TransactionState);
  const delHandler=(type,id)=>{
    delTransaction(type,id);
  }
  return (
    <div className="history-wrapper">
      <h2 className="history-heading">History</h2>
      <div className="history-box">
        {Transaction.Inc.map((cur, index) => {
          return (
            <div className="history-income-expense history-income" key={index}>
              <div className="history-des">{cur.descriptions}</div>
              <div className="history-price">+${cur.amount.toFixed(2)}</div>
              <div className="history-del-btn" onClick={()=>delHandler(cur.type,cur.ID)}>X</div>
            </div>
          );
        })}
        {Transaction.Exp.map((cur, index) => {
          return (
            <div className="history-income-expense history-expense" key={index}>
              <div className="history-des">{cur.descriptions}</div>
              <div className="history-price">-${(cur.amount*-1).toFixed(2)}</div>
              <div className="history-del-btn" onClick={()=>delHandler(cur.type,cur.ID)}>X</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
