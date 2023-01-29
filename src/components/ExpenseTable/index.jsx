import { Button, Table } from 'antd'

export function ExpenseTable({ expenses, onRowDelete }) {
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
    {
      title: 'Acciones',
      width: 120,
      render(value) {
        return (
          <Button
            id={value.id}
            type="link"
            children="Eliminar"
            onClick={onRowDelete}
          />
        )
      },
    },
  ]

  return (
    <Table
      rowKey="id"
      dataSource={expenses}
      columns={columns}
      pagination={false}
    />
  )
}
