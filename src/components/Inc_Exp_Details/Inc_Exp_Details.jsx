import React, { useContext } from "react";
import { TransactionState } from "context/globalContext";
import "./Inc_Exp_Details.scss";
const Inc_Exp_Details = (props) => {
  const { TotalIncome, TotalExpense } = useContext(TransactionState);
  return (
    <div className="Inc_Exp_Details-wrapper">
      <div className="Inc_Exp_Details Inc_Exp_Details-right">
        <h3>Income</h3>
        <h2 className="inc-color">${TotalIncome.toFixed(2)}</h2>
      </div>
      <div className="Inc_Exp_Details">
        <h3>Expense</h3>
        <h2 className="exp-color">${TotalExpense.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Inc_Exp_Details;
