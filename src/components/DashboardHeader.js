import React from "react";
import {NavLink} from "react-router-dom";

const DashboardHeader = () => {
    return <div className={'dashboardHeaderContainer'}>
        <h1 className={'textHeader'}>Expenses</h1>
        <NavLink to={'/create'} className={'dashboardAddExpense'}>
            Add Expense
        </NavLink>
    </div>
}

export default DashboardHeader
