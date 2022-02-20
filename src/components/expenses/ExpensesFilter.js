import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const clearfilter = () => {
    props.onChangeFilter(-1);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
      <button onClick={clearfilter}>Clear Filter</button>
        <select value={props.selected} onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
