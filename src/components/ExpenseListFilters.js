import 'react-dates/initialize'
import React from 'react'
import {connect} from "react-redux";
import {DateRangePicker} from "react-dates";
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    }
    onDateChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render() {
        return(
            <div>
                <input type={'text'} value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select onChange={(e) => {
                    this.props.dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())
                }}>
                    <option value={'date'}>Date</option>
                    <option value={'amount'}>Amount</option>
                </select>
                <DateRangePicker
                    startDateId ={'startDateId'}
                    endDateId = {'endDateId'}
                    startDate ={this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDateChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates ={true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    displayFormat = {'DD/MM/YYYY'}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)