import React from 'react'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? 'minus' : 'plus';
  return (
    <li className={transaction.amount < 0 ? "minus" : "pluse"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
          <button className='delete-btn'>
          X
          </button>
          </li>
  )
}


export default Transaction
