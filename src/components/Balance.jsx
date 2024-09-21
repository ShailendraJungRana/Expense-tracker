import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Check if transactions are defined and are an array
  const amounts = transactions?.length ? transactions.map(transaction => Number(transaction.amount)) : [];

  // Reduce amounts array safely to calculate the total balance
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
