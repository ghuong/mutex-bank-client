import styles from "./css/Panel.module.css";

const Panel = ({ children }) => <div className={styles.panel}>{children}</div>;

export default Panel;
