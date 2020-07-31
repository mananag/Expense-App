import React from 'react';
// noinspection ES6CheckImport
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import NotFoundPage from '../components/404Page';
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from "../components/Dashboard";
import LoginPage from "../components/LoginPage";
import AddExpensePage from "../components/AddExpense";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;