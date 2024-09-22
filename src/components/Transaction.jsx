import React from 'react'
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({transaction}) => {
    const {deleteTransaction} = React.useContext(GlobalContext);
    const sign = transaction.amount < 0 ? 'minus' : 'plus';
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
          <button onClick={()=>deleteTransaction(transaction.id) }className='delete-btn'>
          X
          </button>
          </li>
  )
}


export default Transaction
