import React from 'react';
// noinspection ES6CheckImport
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import NotFoundPage from '../components/404Page';
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/Dashboard";
import AddExpensePage from "../components/AddExpense";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path = "/" component = {ExpenseDashboardPage}  />
                <Route path = "/create" component={AddExpensePage} />
                <Route path = "/edit/:id" component={EditExpensePage} />
                <Route path = "/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter