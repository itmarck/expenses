import { people } from '../../data/people'
import { Button, Form, Input, Select } from 'antd'

export function ExpenseForm({ handleSubmit }) {
  const [form] = Form.useForm()

  function onFinish(values) {
    handleSubmit(values)
  }

  return (
    <Form
      layout="vertical"
      form={form}
      style={{ maxWidth: 240 }}
      onFinish={onFinish}
      initialValues={{
        amount: 0,
        unitPrice: 0,
        by: people[0].name,
      }}
    >
      <Form.Item name="description" label="Descripción">
        <Input placeholder="Descripción del gasto" />
      </Form.Item>
      <Form.Item name="amount" label="Cantidad">
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item name="unitPrice" label="Precio unitario">
        <Input type="number" min={0} step={0.1} />
      </Form.Item>
      <Form.Item name="by" label="Pagado por">
        <Select
          options={people.map((person) => {
            return {
              value: person.name,
              label: person.name,
            }
          })}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Agregar
        </Button>
      </Form.Item>
    </Form>
  )

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
