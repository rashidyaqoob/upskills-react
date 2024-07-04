import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Transaction = ({ id, title, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <>
      <li className={sign === "-" ? "minus" : "plus"} key={id}>
        {title}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
