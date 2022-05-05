import styles from "./css/AccountBalance.module.css";

const AccountBalance = ({ balance }) => (
  <h1 className={styles.balance}>${balance}</h1>
);

export default AccountBalance;
