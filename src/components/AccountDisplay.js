import { useState } from "react";

import Button from "react-bootstrap/Button";

// import styles from "./css/AccountDisplay.module.css";

import Panel from "./Panel";
import AccountBalance from "./AccountBalance";
import TransactionsList from "./TransactionsList";

import simulateTransactions from "../services/transactions";

const AccountDisplay = ({ accountName, useMutex = false }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const resetSimulation = () => {
    setBalance(0);
    setTransactions([]);
  };

  const runSimulatedTransactions = async () => {
    const transactionRequests = [
      { product: "coffee ☕", price: 100 },
      { product: "tea 🫖", price: 100 },
      { product: "grapes 🍇", price: 100 },
      { product: "olives 🫒", price: 100 },
    ];
    const result = await simulateTransactions(
      balance,
      transactionRequests,
      useMutex
    );
    setBalance(result.balance);
    setTransactions(transactions.concat(result.operations));
  };

  const transactionsList = transactions.length ? (
    <Panel>
      <TransactionsList transactions={transactions} />
    </Panel>
  ) : null;

  return (
    <div>
      <Panel>
        <h2>{accountName}</h2>
        <AccountBalance balance={balance} />
        <Button variant="primary" onClick={runSimulatedTransactions}>
          Race! 🏁
        </Button>
        <Button variant="primary" onClick={resetSimulation}>
          Reset
        </Button>
      </Panel>
      {transactionsList}
    </div>
  );
};

export default AccountDisplay;
