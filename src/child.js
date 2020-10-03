import React, { useState, useContext, delTransaction } from 'react';
import { ContextProvider, TransactionContext } from './context';
import reducer from './reducer';

function Child() {

    const { transactions, addTransaction } = useContext(TransactionContext);

    // let [transactions, setTransaction] = useState(transactions);
    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount);
        addTransaction({ amount: Number(newAmount), desc: newDesc })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;

    }

    



    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your balance <br /> {getIncome() + getExpense()} </h3>

            <div className="total-expense-container">
                <h3>Income <br /> {getIncome()} </h3>
                <h3>Expense <br /> {getExpense()}</h3>
            </div>

            <h4>History</h4>
            <hr />

            <ul className="expense-list">
                {transactions.map((transaction, ind) => {
                    return (
                        <li key={ind}>
                            <span> {transaction.desc} </span>
                            <span> {transaction.amount} </span>
                        </li>
                    )
                })}
            </ul>

            <h4>Add New Transaction</h4>
            <hr />

            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>
                    Enter Description: <br />
                    <input type="text" required onChange={(e) => setNewDesc(e.target.value)} />
                </label>

                <br />

                <label>
                    Enter Amount: <br />
                    <input type="number" required onChange={(e) => setNewAmount(e.target.value)} />
                </label>

                <br /> <br />

                <input type="submit" value="Add Transaction" />

            </form>
        </div>
    );
}




export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(delTransaction);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}Rs.{Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    )
}


export default Child;