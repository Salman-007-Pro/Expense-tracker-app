import React from 'react'
import "./AddTransaction.scss"
const AddTransaction = (props) => {
  return (
    <div className="transaction-wrapper">
      <h2 className="transaction-heading">Add new Transaction</h2>
      <div className="transaction-box">
        <form>
        <div className="transaction-input-box">
          <div className="transaction-input-label">Text:</div>
          <input type="text" className="transaction-input-field" required></input>
        </div>
        <div className="transaction-input-box">
          <div className="transaction-input-label">Amount:
          <span>(negative - expense, positive - income)</span>
          </div>
          <input type="number" className="transaction-input-field" required  pattern="^[1-9]\d*$"></input>
        </div>
        <div className="transaction-input-box">
          <button className="transaction-input-btn">Add Transaction</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddTransaction
