import { useEffect, useState } from 'react'
import { people } from '../../data/people'
import { getLocalExpenses, setLocalExpenses } from '../../data/storage'
import { ExpenseForm } from '../ExpenseForm'
import { ExpenseTable } from '../ExpenseTable'

export function ExpenseBoard() {
  const [expenses, setExpenses] = useState([])

  useEffect(function () {
    setExpenses(getLocalExpenses())
  }, [])

  function handleSubmit(data) {
    const expense = {
      id: Date.now(),
      description: data.description,
      amount: data.amount,
      unitPrice: data.unitPrice,
      by: people.find((person) => person.name === data.by),
    }
    const newExpenses = [...expenses, expense]
    setExpenses(newExpenses)
    setLocalExpenses(newExpenses)
  }

  const totalExpenses = expenses.reduce(function (previous, current) {
    return previous + current.amount * current.unitPrice
  }, 0)

  const expensesPeople = expenses.map((expense) => expense.by.name)
  const peopleQuantity = new Set(expensesPeople).size
  const total = totalExpenses / peopleQuantity

  return (
    <div className="App">
      <ExpenseTable expenses={expenses} />
      <ExpenseForm handleSubmit={handleSubmit} />
      <div>El total por persona es {total}</div>
    </div>
  )
}
