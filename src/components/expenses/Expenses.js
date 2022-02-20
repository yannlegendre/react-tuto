import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(-1);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = () => {
    if(filteredYear === -1) {
      return props.expenses;
    } else {
      return props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
      );
    }
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses()}/>
      </Card>
    </div>
  );
}

export default Expenses;
