import "./App.css";
import Balance from "./Balance/Balance";
import Header from "./Header/Header";
import IncomeExpense from "./IncomeExpense/IncomeExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
    </div>
  );
}

export default App;
