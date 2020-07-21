import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';












store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses , state.filters)
    console.log(visibleExpense)
})


// store.dispatch(setStartDate())
// store.dispatch(setEndDate(234))

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: '500', createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Rents', amount: '300', createdAt: 2000}))
// store.dispatch(setStartDate(200))
// store.dispatch(setEndDate(300))
// store.dispatch(removeExpense({id : expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {description: 'Hello'}))
//
// store.dispatch(setTextFilter('ts'));
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// const demoState = {
//   expenses: [{
//     id: 'poijasdfhwer',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
