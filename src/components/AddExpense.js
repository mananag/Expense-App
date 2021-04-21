import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startAddExpense} from "../actions/expenses";

class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.dispatch(startAddExpense(expense))
        window.location.href = '/dashboard'
    };
    render() {
        return(
            <div className={'dashboardContainer'}>
                <h1 className={'textHeader'}>Add Expense</h1>
                <ExpenseForm onSubmit = {this.onSubmit} />
            </div>
        )
    }
}

export default connect()(AddExpensePage)
