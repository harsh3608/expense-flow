import React from "react";
import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2023,9,8);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 500.00;


    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;