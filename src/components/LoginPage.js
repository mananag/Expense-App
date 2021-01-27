import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from "../actions/auth";
import '../styles/loginPage/login.scss';

export const LoginPage = ({startLogin}) => (
    <div className={'loginWrapper'}>
        <div className={'loginContainer'}>
            <h1>Expensify</h1>
            <p>Control your Expenses</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())

})

export default connect(undefined, mapDispatchToProps)(LoginPage)