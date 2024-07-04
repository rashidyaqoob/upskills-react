import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../../context/GlobalContext";

const TransactionList = () => {
  const context = useContext(GlobalContext);
  const items = context.transactions;
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {items.map((item) => (
          <Transaction id={item.id} title={item.title} amount={item.amount} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
