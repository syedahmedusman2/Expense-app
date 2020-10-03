import React, { transaction, createContext, useReducer, delTransaction } from 'react';
import transactionReducer from './reducer';

const initialData = [
    { amount: 800, desc: "Cash" },
    { amount: 40, desc: "Book" },
    { amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(initialData);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialData);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

      // Delete Existing Transaction Action
            function delTransaction(id) {
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id
                });
            }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction,
                delTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    );

}
