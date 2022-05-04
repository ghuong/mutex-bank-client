
const Transaction = ({ transaction }) => {
  const { product, operation, balance } = transaction;

  return (
    <li className="transaction">
      <h4>{product} sale</h4>
      <p>{`${operation}: $${balance}`}</p>
    </li>
  )
}

export default Transaction