
const Transaction = ({ transaction }) => {
  const { oldBalance, newBalance } = transaction;

  return (
    <li className="transaction">
      <p>Read balance: ${oldBalance}</p>
      <p>Updated balance to: ${newBalance}</p>
    </li>
  )
}

export default Transaction