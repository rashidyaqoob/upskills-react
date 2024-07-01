import "./App.css";
import TransactionList from "./components/Transaction/TransactionList";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
