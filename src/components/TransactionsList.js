import css from "./css/TransactionsList.module.css";

import Transaction from "./Transaction";

const TransactionsList = ({ transactions, explanationMessage }) => {
  //! using array index as key is not recommended
  return (
    <div>
      <h1>Operations</h1>
      <ul className={css.transactions}>
        {transactions.map((transaction, i) => (
          <Transaction key={i} transaction={transaction} />
        ))}
      </ul>
      <h1>Explanation</h1>
      <p>{explanationMessage}</p>
    </div>
  );
};

export default TransactionsList;
