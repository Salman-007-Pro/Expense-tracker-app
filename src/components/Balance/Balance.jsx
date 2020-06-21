import React,{useContext} from "react";
import "./Balance.scss";
import { TransactionState } from "context/globalContext";
const Balance = (props) => {
  const { Balance } = useContext(TransactionState);
  return (
    <div className="balance-wrapper">
      <h3>Your Balance</h3>
      <h2>${Balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
