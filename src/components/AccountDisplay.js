import { useState } from "react";

import Button from "react-bootstrap/Button";

import styles from "./css/AccountDisplay.module.css";

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
      { product: "coffee", price: 100 },
      { product: "tea", price: 100 },
      { product: "grapes", price: 100 },
      { product: "olives", price: 100 },
    ];
    const result = await simulateTransactions(
      balance,
      transactionRequests,
      useMutex
    );
    setBalance(result.balance);
    setTransactions(transactions.concat(result.operations));
  };

  return (
    <div>
      <div className={styles.panel}>
        <h2>{accountName}</h2>
        <AccountBalance balance={balance} />
        <Button variant="primary" onClick={runSimulatedTransactions}>
          Simulate Concurrent Race Conditions
        </Button>
        <Button variant="primary" onClick={resetSimulation}>
          Reset
        </Button>
      </div>
      {
        transactions.length
        ? <div className={styles.panel}>
            <TransactionsList transactions={transactions} />
          </div>
        : null
      }
    </div>
  );
};

export default AccountDisplay;
