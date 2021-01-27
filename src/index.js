import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startSetExpense} from "./actions/expenses";
import {login, logout} from "./actions/auth";
import './styles/style.scss';
import {firebase} from "./firebase/firebase";
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
                window.location.href = window.location.href
            }
        });
    } else {
        store.dispatch(logout())
        renderApp();
        if (history.location.pathname != '/'){

            history.push('/');
            window.location.href = window.location.href
        }
    }
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
