import styles from "./MainButton.module.css";

const MainButton = ({ id }) => {
  return (
    <a
      href="#"
      className={styles.mainButton}
      data-bs-toggle="modal"
      data-bs-target={`#id${id}`}
    >
      Saber más
    </a>
  );
};

export default MainButton;
