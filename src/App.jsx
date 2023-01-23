import { useEffect, useState } from 'react'
import { people } from './data/people'
import { getLocalExpenses, setLocalExpenses } from './data/storage'

function ExpenseTable({ expenses }) {
  return (
    <table className="ExpenseTable">
      <thead>
        <tr>
          <td>Descripción</td>
          <td>Cantidad</td>
          <td>Precio unitario</td>
          <td>Total</td>
          <td>Pagado por</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map(function (expense) {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.unitPrice}</td>
              <td>{expense.by.name}</td>
              <td>{expense.amount * expense.unitPrice}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ExpenseForm({ handleSubmit }) {
  function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const formProps = Object.fromEntries(formData)

    handleSubmit(formProps)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="description">Descripción</label>
        <input title="No" type="text" name="description" />
      </div>
      <div>
        <label htmlFor="amount">Cantidad</label>
        <input title="No" type="number" name="amount" id="amount" />
      </div>
      <div>
        <label htmlFor="unitPrice">Precio unitario</label>
        <input title="No" type="number" name="unitPrice" step={0.01} />
      </div>

      <div>
        <label htmlFor="by">Pagado por</label>
        <select name="by" id="by">
          {people.map(function (person) {
            return (
              <option key={person.name} value={person.name}>
                {person.name}
              </option>
            )
          })}
        </select>
      </div>

      <button type="submit">Agregar</button>
    </form>
  )
}

function App() {
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

  return (
    <div className="App">
      <ExpenseTable expenses={expenses} />

      <ExpenseForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
