import { ADD_TRANSACTION, DEL_TRANSACTION } from "constants/actions";
import {addTransactionState,delTransactionState} from "Reducers/utilities"
const TransactionReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return addTransactionState(state,action.payload);
    case DEL_TRANSACTION:
      return delTransactionState(state,action.payload);
    default:
      return state
  }
};

export default TransactionReducer;
