import React, { useContext, useState } from "react";
import { TransactionState } from "context/globalContext";
import "./AddTransaction.scss";
const AddTransaction = (props) => {
  const { Transaction, addTransaction } = useContext(TransactionState);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  let ID;
  const transactionHandler = (event) => {
    event.preventDefault();
    if (amount !== 0) {
      const type = amount < 0 ? "Exp" : "Inc";
      if (Transaction[type].length > 0) {
        ID = Transaction[type][Transaction[type].length - 1].ID + 1;
      } else {
        ID = 0;
      }
      addTransaction(
        new Object({
          type: type,
          descriptions: description,
          amount: +amount,
          ID: ID,
        })
      );
    } else {
      alert("Plz Do'not Enter zero amount:)");
    }
    setDescription("");
    setAmount("");
  };
  return (
    <div className="transaction-wrapper">
      <h2 className="transaction-heading">Add new Transaction</h2>
      <div className="transaction-box">
        <form onSubmit={transactionHandler}>
          <div className="transaction-input-box">
            <div className="transaction-input-label">Text:</div>
            <input
              type="text"
              className="transaction-input-field"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="transaction-input-box">
            <div className="transaction-input-label">
              Amount:
              <span>(negative - expense, positive - income)</span>
            </div>
            <input
              type="number"
              className="transaction-input-field"
              required
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
          </div>
          <div className="transaction-input-box">
            <button className="transaction-input-btn">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
