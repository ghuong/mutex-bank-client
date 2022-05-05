const Transaction = ({ transaction }) => {
  const { product, price, operation, balance } = transaction;

  let message = `Sell $${price} of ${product} - ${operation}`;
  let balanceMessage = null;
  if (balance !== undefined) {
    message = message.concat(": ");
    balanceMessage = <b>{`$${balance}`}</b>;
  }

  return (
    <li className="transaction">
      <p>
        {message}
        {balanceMessage}
      </p>
    </li>
  );
};

export default Transaction;
