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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;