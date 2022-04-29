import { useState } from "react";

import AccountBalance from "./AccountBalance";
import Button from "./Button";
import TransactionsList from "./TransactionsList";

const AccountDisplay = ({ startingBalance }) => {
  const [balance, setBalance] = useState(startingBalance);
  const [transactions, setTransactions] = useState([]);

  const deposit = (amount) => {
    const newBalance = balance + amount;
    setBalance(balance + amount);
    setTransactions(
      transactions.concat({
        oldBalance: balance,
        newBalance
      })
    );
  };

  const depositAmount = 10;
  return (
    <div className="account">
      <AccountBalance balance={balance} />
      <Button
        handleClick={() => deposit(depositAmount)}
        text={`deposit $${depositAmount}`}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default AccountDisplay;
