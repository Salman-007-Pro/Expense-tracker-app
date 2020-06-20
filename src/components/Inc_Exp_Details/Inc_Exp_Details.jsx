import React from 'react'
import "./Inc_Exp_Details.scss"
const Inc_Exp_Details = (props) => {
  return (
    <div className="Inc_Exp_Details-wrapper">
      <div className="Inc_Exp_Details Inc_Exp_Details-right">
        <h3>Income</h3>
        <h2 className="inc-color">$420.00</h2>
      </div>
      <div className="Inc_Exp_Details">
        <h3>Expense</h3>
        <h2 className="exp-color">$300.00</h2>
      </div>
    </div>
  )
}

export default Inc_Exp_Details
