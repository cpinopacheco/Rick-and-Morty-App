import styles from "./Alert.module.css";

const Alert = ({ msg }) => {
  return (
    <div
      className={`${styles.alert} container animate__animated animate__bounceIn`}
    >
      <p className={styles.content}>{msg}</p>
    </div>
  );
};

export default Alert;
