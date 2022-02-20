import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense/NewExpense";
import initialExpenses from "./dummyData";

function App() {
  const addExpenseHandler = expense => {
    console.log('in app js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={initialExpenses} />
    </div>
  );
}

export default App;
