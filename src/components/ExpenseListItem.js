import React from "react";
import {NavLink} from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <NavLink to={`/edit/${id}`} className={'item'}>
            <p className={'date'}>{moment(createdAt).format('MMMM Do, YYYY')}</p>
            <p>{description}</p>
            <p className={'amount'}> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)}</p>
        </NavLink>
    </div>
)
export default ExpenseListItem;
