import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        // selectedYear = year;
        setFilteredYear(setFilteredYear);
        console.log("Expenses.js")
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler} defaultYear={filteredYear}></ExpensesFilter>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            </Card>
        </div>

    );
}

export default Expenses;