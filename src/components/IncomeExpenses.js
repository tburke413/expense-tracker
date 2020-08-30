import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = Math.abs(transactions.reduce((acc,transaction) => transaction.amount > 0 ? acc + transaction.amount : acc,0).toFixed(2));
  const expenses = Math.abs(transactions.reduce((acc,transaction) => transaction.amount < 0 ? acc + transaction.amount : acc,0).toFixed(2));

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenses}</p>
      </div>
    </div>
  )
}