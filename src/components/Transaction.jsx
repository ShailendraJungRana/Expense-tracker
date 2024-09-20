import React from 'react'
import Transactions from '../components/TransitionList';
const Transaction = ({transactions}) => {
    const sign = transactions.amount < 0 ? 'minus' : 'plus';
  return (
    <li className={transactions.amount < 0 ? "minus" : "pluse"}>
            {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
          <button className='delete-btn'>
          X
          </button>
          </li>
  )
}


export default Transaction
