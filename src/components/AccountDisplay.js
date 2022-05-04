import { useState } from "react";

import AccountBalance from "./AccountBalance";
import Button from "./Button";
import TransactionsList from "./TransactionsList";

import simulateTransactions from "../services/transactions";

const AccountDisplay = ({ accountName, useMutex = false }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const resetSimulation = () => {
    setBalance(0);
    setTransactions([]);
  }

  const runSimulatedTransactions = async () => {
    const transactionRequests = [
      { product: "coffee", price: 100 },
      { product: "tea", price: 100 },
      { product: "grapes", price: 100 },
      { product: "olives", price: 100 },
    ];
    console.log("simulating...");
    const result = await simulateTransactions(balance, transactionRequests, useMutex);
    console.log("result", result);
    setBalance(result.balance);
    setTransactions(transactions.concat(result.operations));
  };

  return (
    <div className="account-display">
      <div className="account-details">
        <h2>{accountName}</h2>
        <AccountBalance balance={balance} />
        <Button
          handleClick={runSimulatedTransactions}
          text="Sell Products"
        />
        <Button
          handleClick={resetSimulation}
          text="Reset"
        />
      </div>
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default AccountDisplay;
