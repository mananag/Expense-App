import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import DashboardHeader from "./DashboardHeader";

const ExpenseDashboardPage = () => (
    <div className={'dashboardContainer'}>
        <DashboardHeader />
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage
