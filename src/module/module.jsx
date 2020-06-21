import React from "react";
import Header from "components/Header/Header";
import Balance from "components/Balance/Balance";
import Inc_Exp_Details from "components/Inc_Exp_Details/Inc_Exp_Details";
import History from "components/History/History";
import AddTransaction from "components/AddTransaction/AddTransaction";
import GlobalContext from "context/globalContext";
import "./module.scss";
const Module = (props) => {
  return (
    <GlobalContext>
      <div className="module-box-wrapper">
        <Header />
        <Balance />
        <Inc_Exp_Details />
        <History />
        <AddTransaction />
      </div>
    </GlobalContext>
  );
};
export default Module;
