import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpensesFilter'
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(e => (
                    <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                    ))}
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
            </Card>
        </div>
    )
}

export default Expenses;