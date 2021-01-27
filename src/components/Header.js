import React from "react";
import {startLogout} from "../actions/auth";
import {connect} from 'react-redux'
import expensify from './Expensify.png'
import {NavLink} from "react-router-dom";

export const Header = ({startLogout}) => (
    <div className={'headerContainer'}>
        <nav>
            <h1> <img src={expensify}/> </h1>
            <NavLink exact to={'/dashboard'} activeClassName = 'is-active'>Dashboard</NavLink>
            <NavLink to={'/create'} activeClassName = 'is-active'>Create Expense</NavLink>
            <NavLink to={'/create'} activeClassName = 'is-active'>Settings</NavLink>
            <button onClick={startLogout}>Logout</button>

        </nav>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
