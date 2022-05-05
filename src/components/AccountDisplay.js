import { useState } from "react";

import Button from "react-bootstrap/Button";

import css from "./css/AccountDisplay.module.css";

import Panel from "./Panel";
import AccountBalance from "./AccountBalance";
import TransactionsList from "./TransactionsList";

import simulateTransactions from "../services/transactions";
import shuffleArray from "../services/shuffleArray";

const AccountDisplay = ({
  accountName,
  explanationMessage,
  accountDescription,
  useMutex = false,
}) => {
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
    shuffleArray(transactionRequests);
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
      <TransactionsList
        transactions={transactions}
        explanationMessage={explanationMessage}
      />
    </Panel>
  ) : null;

  return (
    <div>
      <Panel className={css.account_display}>
        <h1 className={css.account_name}>{accountName}</h1>
        <div className={css.account_balance}>
          <AccountBalance balance={balance} />
        </div>
        <div className={css.flexbox_center}>
          <Button
            variant="success"
            size="lg"
            className={css.button}
            onClick={runSimulatedTransactions}
          >
            Race 🏁
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className={css.button}
            onClick={resetSimulation}
          >
            Reset ❌
          </Button>
        </div>
      </Panel>
      {transactionsList}
    </div>
  );
};

export default AccountDisplay;
