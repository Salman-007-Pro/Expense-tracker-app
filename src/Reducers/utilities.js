export const addTransactionState=(oldState,obj)=>{
  const newState={
    ...oldState
  }
  newState.Transaction[obj.type].push(obj);
  newState.Balance=updateBalance(newState);
  newState.TotalIncome=updateTotalIncome(newState);
  newState.TotalExpense=updateTotalExpense(newState);
  return {
    ...oldState,
    ...newState,
  }
}
export const delTransactionState=(oldState,obj)=>{
  const newState={
    ...oldState
  }
  newState.Transaction[obj.type]=newState.Transaction[obj.type].filter((el)=> el.ID!==obj.ID);
  newState.Balance=updateBalance(newState);
  newState.TotalIncome=updateTotalIncome(newState);
  newState.TotalExpense=updateTotalExpense(newState);
  return {
    ...oldState,
    ...newState,
  }
}

const updateBalance=(state)=>{
  let {Balance,Transaction}=state;
  Balance=Transaction["Inc"].reduce((sum,cur)=>{
    return sum+=cur.amount;
  },0)+Transaction["Exp"].reduce((sum,cur)=>{
    return sum+=cur.amount;
  },0);
  return Balance;
}
const updateTotalIncome=(state)=>{
  let {TotalIncome,Transaction}=state;
  TotalIncome=Transaction["Inc"].reduce((sum,cur)=>{
    return sum+=cur.amount;
  },0);
  return TotalIncome;
}
const updateTotalExpense=(state)=>{
  let {TotalExpense,Transaction}=state;
  TotalExpense=Transaction["Exp"].reduce((sum,cur)=>{
    return sum+=cur.amount;
  },0);
  return TotalExpense;
}
