import "./App.css";
import TransactionList from "./components/Transaction/TransactionList";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import AddTransaction from "./components/AddTransaction/AddTransaction";

function App() {
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
}

export default App;
