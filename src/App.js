import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Phone",
    amount: 800,
    date: new Date(2023, 1, 14),
  }, {
    id: "e2",
    title: "Car Insurance",
    amount: 930,
    date: new Date(2023, 2, 15),
  },
  {
    id: "e3",
    title: "Protection Plan",
    amount: 200,
    date: new Date(2023, 3, 14),
  },
  {
    id: "e4",
    title: "Headphones",
    amount: 150,
    date: new Date(2023, 5, 14),
  },

  {
    id: "e5",
    title: "Speakers",
    amount: 599.99,
    date: new Date(2023, 7, 12),
  },
  {
    id: "e6",
    title: "Keyboard",
    amount: 230.79,
    date: new Date(2023, 9, 12),
  },
  {
    id: "e7",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e8",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e9",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },

];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />


    </div>
  );
}

export default App;
