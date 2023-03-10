import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import { people } from '../../data/people'
import { getLocalExpenses, setLocalExpenses } from '../../data/storage'
import { ExpenseTable } from '../ExpenseTable'

const { Text } = Typography

export function ExpenseBoard() {
  const [expenses, setExpenses] = useState(getLocalExpenses())

  useEffect(() => {
    setLocalExpenses(expenses)
  }, [expenses])

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id != id))
  }

  function onRowDelete(event) {
    const target = event && event.target
    const parent = target && target.parentElement
    const id = parent && parent.id

    id && deleteExpense(id)
  }

  function handleSubmit(data) {
    const expense = {
      id: Date.now(),
      description: data.description,
      amount: data.amount,
      unitPrice: data.unitPrice,
      by: people.find((person) => person.name === data.by),
    }
    setExpenses([...expenses, expense])
  }

  const totalExpenses = expenses.reduce(function (previous, current) {
    return previous + current.amount * current.unitPrice
  }, 0)

  const expensesPeople = expenses.map((expense) => expense.by.name)
  const peopleQuantity = new Set(expensesPeople).size
  const total = totalExpenses / peopleQuantity

  return (
    <ExpenseTable
      expenses={expenses}
      onRowDelete={onRowDelete}
      handleSubmit={handleSubmit}
      footer={() => (
        <Text type="secondary">
          El total por persona es <Text>S/ {total.toFixed(2)}</Text>
        </Text>
      )}
    />
  )
}
