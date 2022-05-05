import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  //! using array index as key is not recommended
  return (
    <div className="transaction-container">
      <h3>Operations</h3>
      <ul>
        {transactions.map((transaction, i) => (
          <Transaction key={i} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
