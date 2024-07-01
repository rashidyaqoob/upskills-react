import "./App.css";
import TransactionList from "./components/Transaction/TransactionList";
import Balance from "./Balance/Balance";
import Header from "./Header/Header";
import IncomeExpense from "./IncomeExpense/IncomeExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </div>
  );
}

export default App;
