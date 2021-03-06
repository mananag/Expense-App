import 'react-dates/initialize';
import React from 'react'
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css'

const now = moment()

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }))
    }
    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState(() => ({createdAt}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused : focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.description && this.state.amount){
            this.setState(() => ({
                error: ''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
        else {
            this.setState(() => ({
                error: 'Please provide description and amount.'
            }))
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className={'expenseForm'}>
                    <input className={'description'} type={'text'} placeholder={'Description'} autoFocus
                           value={this.state.description}
                           onChange={this.onDescriptionChange}
                    />
                    <input className={'amount'} type={'text'} placeholder={'Amount'}
                           value={this.state.amount}
                           onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                    />
                    <textarea placeholder={'Add Note for your expense page (optional)'}
                              value={this.state.note}
                              onChange={this.onNoteChange}
                    >
                </textarea>
                    <div className={'formButtonContainer'}>
                        <button type={'submit'} > {this.props.formType === "edit" ? "Edit Expense" : "Add Expense"} </button>
                        {this.props.formType === "edit" && <button className={'removeButton'} type={"button"} onClick={this.props.handleRemove}>Remove</button>}
                    </div>

                </form>
            </div>
        )
    }
}
