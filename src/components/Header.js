import {NavLink} from "react-router-dom";
import React from "react";
import {startLogout} from "../actions/auth";
import {connect} from 'react-redux'

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensify</h1>
        <NavLink exact to={'/dashboard'} activeClassName = 'is-active' >Dashboard</NavLink>
        <NavLink to={'/create'} activeClassName = 'is-active'>Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)