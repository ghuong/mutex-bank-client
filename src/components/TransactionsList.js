import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  //! using array index as key is not recommended
  return (
    <ul className="transactions">
      {transactions.map((transaction, i) => (
        <Transaction key={i} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionsList;
