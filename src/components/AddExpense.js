import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startAddExpense} from "../actions/expenses";

class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.dispatch(startAddExpense(expense))
        this.props.history.push('/')
    };
    render() {
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit = {this.onSubmit} />
            </div>
        )
    }
}

export default connect()(AddExpensePage)