import React,{createContext,useReducer} from 'react'
import { ADD_TRANSACTION, DEL_TRANSACTION } from "constants/actions";
import TransactionReducer from "Reducers/TransactionReducer"
export const TransactionState=createContext();
const GlobalContext = (props) => {
  const initalState={
    Balance:0,
    TotalIncome:0,
    TotalExpense:0,
    Transaction:{
      Inc:[],
      Exp:[],
    },
  }
  let [state,dispatch]=useReducer(TransactionReducer,initalState)
  const delTransaction=(type,ID)=>{
    dispatch({
      type:DEL_TRANSACTION,
      payload:{
        type,
        ID
      },
    });
  }
  const addTransaction=(obj)=>{
    dispatch({
      type:ADD_TRANSACTION,
      payload:{
        ...obj
      },
    });
  }
  return (
    <TransactionState.Provider value={{
      ...state,
      delTransaction,
      addTransaction
    }
    }>
      {props.children}
    </TransactionState.Provider>
 )
}

export default GlobalContext
