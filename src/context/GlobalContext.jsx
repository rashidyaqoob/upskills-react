import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  transactions: [
    { id: uuidv4(), title: "Cash", amount: -3000 },
    { id: uuidv4(), title: "Expense", amount: -600 },
    { id: uuidv4(), title: "Salary", amount: 6000 },
  ],
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...transaction, id: uuidv4() },
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
