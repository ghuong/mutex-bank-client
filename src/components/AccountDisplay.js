import { useState } from "react";

import AccountBalance from "./AccountBalance";
import Button from "./Button";

const AccountDisplay = ({ startingBalance }) => {
  const [balance, setBalance] = useState(startingBalance);

  const deposit = (amount) => {
    console.log("depositing ", amount)
    setBalance(balance + amount);
  }

  const depositAmount = 10;
  return (
    <div className="account">
      <AccountBalance balance={balance} />
      <Button
        handleClick={() => deposit(depositAmount)}
        text={`deposit $${depositAmount}`}
      />
    </div>
  );
};

export default AccountDisplay;
