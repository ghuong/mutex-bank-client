const Transaction = ({ transaction }) => {
  const { product, operationMessage, operationType, balance } =
    transaction;

  // let message = `Sell $${price} of ${product} - ${operation}`;
  let message = operationMessage;
  let balanceMessage = null;
  let productMessage = null;

  switch (operationType) {
    case "read":
    case "write":
      message = message.concat(":");
      balanceMessage = <b>{` $${balance}`}</b>;
      break;
    default:
      break;
  }

  switch (operationType) {
    case "begin":
      break;
    default:
      productMessage = ` (${product})`;
  }

  return (
    <li className="transaction">
      <p>
        {message}
        {balanceMessage}
        {productMessage}
      </p>
    </li>
  );
};

export default Transaction;
