import React from "react";
import {NavLink} from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <li>
            <NavLink to={`/edit/${id}`} > <p>Description : {description}</p></NavLink>
            <p>Amount : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)}</p>
            <p>createdAt : {moment(createdAt).format('MMMM Do, YYYY')}</p>
        </li>
    </div>
)
export default (ExpenseListItem);