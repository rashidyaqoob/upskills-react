import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import ExpenseTracker from "./pages/ExpenseTracker";
import Weather from "./pages/Weather";

function App() {
  return (
    <GlobalProvider>
      <div style={{ display: "flex" }}>
        <ExpenseTracker />
      </div>
      <Weather />
    </GlobalProvider>
  );
}

export default App;
