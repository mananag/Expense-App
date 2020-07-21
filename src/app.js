import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import './styles/style.scss';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: 150}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 300, createdAt: 100}));
store.dispatch(addExpense({description: 'Rent', amount: 250, createdAt: 50}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));