import { useState } from 'react'
import { people } from './data/people'

function Expense({ expense }) {
  return (
    <div>
      {expense.id} {expense.name} Total: {expense.amount * expense.unitPrice}{' '}
      By: {expense.by.name}
    </div>
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
        <input type="text" name="description" />
      </div>
      <div>
        <label htmlFor="amount">Cantidad</label>
        <input type="number" name="amount" id="amount" />
      </div>
      <div>
        <label htmlFor="unitPrice">Precio unitario</label>
        <input type="number" name="unitPrice" id="unitPrice" />
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

  function handleSubmit(data) {
    const expense = {
      id: Date.now(),
      name: data.name,
      amount: data.amount,
      unitPrice: data.unitPrice,
      by: people.find((person) => person.name === data.by),
    }
    setExpenses([...expenses, expense])
  }

  return (
    <div className="App">
      {expenses.map(function (expense) {
        return <Expense key={expense.id} expense={expense} />
      })}

      <ExpenseForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
