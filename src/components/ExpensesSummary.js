import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from "../selectors/expenses";
import PieChart from "./PieChart";
import LineGraph from "./LineGraph";

const ExpenseSummary = ({expenses}) => {
    const dataPoints = []
    const dataPoints2 = []
    let totalAmount = 0
    expenses.slice(0).reverse().map(({amount, description, createdAt}) => {
        dataPoints.push({ y: amount, label: description})
        totalAmount+=amount;
        dataPoints2.push({x: new Date(createdAt), y: totalAmount})
    })

    return (
        <div id="chartContainer" style={{width: "100%", display: "flex"}}>
            <LineGraph dataPoints={dataPoints2} />
            <PieChart totalAmount ={totalAmount} dataPoints = {dataPoints} />
        </div>
    );
    // const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    // const formattedExpensesTotal = new Intl.NumberFormat('en-IN', {
    //     style: 'currency',
    //     currency: 'INR'
    // }).format(expensesTotal);
    //
    // return (
    //     <div>
    //
    //         <div className={'textHeader'}>
    //             Your Expenses
    //         </div>
    //         <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
    //
    //     </div>
    // )
}

const mapStateToProps = (state) => {
    // const visibleExpense = selectExpenses(state.expenses, state.filters)
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
