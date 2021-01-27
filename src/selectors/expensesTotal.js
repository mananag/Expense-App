const total = (expenses) => {
    const reducer = (sum, value) => sum + value;
    return expenses.map((expense) => expense.amount).reduce(reducer, 0);
}

export default total
