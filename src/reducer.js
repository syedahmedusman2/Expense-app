export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }
//         case 'ADD_TRANSACTION':
//             return {
//                 ...state,
//                 transactions: [action.payload, ...state.transactions]
//             }
//         default:
//             return state;
//     };
// }

















// export default transactionReducer;

// const transactionReducer = (state, action) => {
//     switch (action.type) {
       
       
       
       
       
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        default:
            return state;
    };
}

// switch(action.type) {
//     case 'DELETE_TRANSACTION':
//         return {
//             ...state,
//             transactions: state.transactions
//                 .filter(transaction => transaction.id !== action.payload)
//         }