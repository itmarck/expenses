import { people } from '../../data/people'
import { Button } from 'antd'

export function ExpenseForm({ handleSubmit }) {
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

      <Button type="primary" htmlType="sumbit">
        Agregar
      </Button>
    </form>
  )
}
