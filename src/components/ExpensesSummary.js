import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from "../selectors/expenses";
import expensesTotal from '../selectors/expensesTotal'

const ExpenseSummary = ({expensesTotal, expenseCount}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(expensesTotal);

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters)
    return {
        expensesTotal: expensesTotal(visibleExpense),
        expenseCount: visibleExpense.length
    }
}

export default connect(mapStateToProps)(ExpenseSummary)