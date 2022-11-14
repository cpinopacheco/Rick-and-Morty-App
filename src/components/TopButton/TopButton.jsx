import { scrollTop } from "../../helpers/scrollToTop";
import styles from "./TopButton.module.css";

const TopButton = () => {
  return (
    <button className={styles.topButton} onClick={() => scrollTop()}>
      ▲
    </button>
  );
};

export default TopButton;
