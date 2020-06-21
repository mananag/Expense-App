import React from "react";
import {NavLink} from "react-router-dom";

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <li>
            <NavLink to={`/edit/${id}`} > <p>Description : {description}</p></NavLink>
            <p>Amount : {amount}</p>
            <p>createdAt : {createdAt}</p>
        </li>
    </div>
)
export default (ExpenseListItem);