import React from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul class="list">
        <Transaction />
      </ul>
    </>
  );
};

export default TransactionList;
