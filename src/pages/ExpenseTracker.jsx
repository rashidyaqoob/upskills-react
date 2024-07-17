import React from "react";
import TransactionList from "../components/Transaction/TransactionList";
import Balance from "../components/Balance/Balance";
import Header from "../components/Header/Header";
import IncomeExpense from "../components/IncomeExpense/IncomeExpense";
import AddTransaction from "../components/AddTransaction/AddTransaction";

const ExpenseTracker = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};

export default ExpenseTracker;
