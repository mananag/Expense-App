import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, startRemoveExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    console.log(props.expense)
    const handleRemove = () => {
        (props.dispatch(startRemoveExpense({id: props.expense.id})))
        window.location.href = '/dashboard'
    }
    return (
    <div className={'dashboardContainer'}>
        <h1 className={'textHeader'}>Edit Expense</h1>
        <ExpenseForm expense = {props.expense} onSubmit = {(expense) => {
            props.dispatch(startEditExpense(props.expense.id, {...expense}));
            window.location.href ='/dashboard'
        }} handleRemove = {handleRemove} formType = {"edit"} />
    </div>
)}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)
