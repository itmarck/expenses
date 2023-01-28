import { Table } from 'antd'

const columns = [
  {
    title: 'Descripción',
    dataIndex: 'description',
  },
  {
    title: 'Cantidad',
    dataIndex: 'amount',
  },
  {
    title: 'Precio unitario',
    dataIndex: 'unitPrice',
  },
  {
    title: 'Pagado por',
    dataIndex: 'by',
    render(value) {
      return value && value.name
    },
  },
  {
    title: 'Total',
    render(value) {
      return value.amount * value.unitPrice
    },
  },
]

export function ExpenseTable({ expenses }) {
  return (
    <Table
      rowKey="id"
      dataSource={expenses}
      columns={columns}
      pagination={false}
    />
  )
}
