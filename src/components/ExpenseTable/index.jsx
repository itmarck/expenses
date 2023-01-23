export function ExpenseTable({ expenses }) {
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
