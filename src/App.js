import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense/NewExpense";
import initialExpenses from "./dummyData";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const addExpenseHandler = expense => setExpenses(prevExpenses => [expense, ...prevExpenses])

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
