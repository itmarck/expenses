import { Button, Form, Input, Select, Table } from 'antd'
import { people } from '../../data/people'
import { PlusOutlined } from '@ant-design/icons'

export function ExpenseTable({ expenses, onRowDelete, handleSubmit, footer }) {
  const [form] = Form.useForm()

  const columns = [
    {
      title: 'Descripción',
      dataIndex: 'description',
      width: 200,
      fixed: true,
    },
    {
      title: 'Cantidad',
      width: 120,
      dataIndex: 'amount',
    },
    {
      title: 'Precio unitario',
      width: 120,
      dataIndex: 'unitPrice',
    },
    {
      title: 'Pagado por',
      dataIndex: 'by',
      width: 160,
      render(value) {
        return value && value.name
      },
    },
    {
      title: 'Total',
      width: 80,
      render(value) {
        return value.amount * value.unitPrice || ''
      },
    },
    {
      title: 'Acciones',
      width: 120,
      render({ id }) {
        if (id === 0) {
          return (
            <Button type="primary" icon={<PlusOutlined />} htmlType="submit" />
          )
        }
        return (
          <Button id={id} type="link" onClick={onRowDelete}>
            Eliminar
          </Button>
        )
      },
    },
  ]

  const newExpense = {
    id: 0,
    description: (
      <Form.Item name="description">
        <Input placeholder="Descripción del gasto" />
      </Form.Item>
    ),
    amount: (
      <Form.Item name="amount">
        <Input type="number" min={0} />
      </Form.Item>
    ),
    unitPrice: (
      <Form.Item name="unitPrice">
        <Input type="number" min={0} step={0.1} />
      </Form.Item>
    ),
    by: {
      name: (
        <Form.Item name="by">
          <Select
            options={people.map((person) => {
              return {
                value: person.name,
                label: person.name,
              }
            })}
          />
        </Form.Item>
      ),
    },
  }

  function onFinish(values) {
    handleSubmit(values)
    form.resetFields()
  }

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      initialValues={{ amount: 0, unitPrice: 0, by: people[0].name }}
    >
      <Table
        rowKey="id"
        scroll={{ x: '100' }}
        columns={columns}
        pagination={false}
        footer={footer}
        dataSource={[...expenses, newExpense]}
      />
    </Form>
  )
}
