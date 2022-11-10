import banner from "../../assets/rym.png";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <img src={banner} className={styles.charactersImg} alt="rick-and-morty" />
    </header>
  );
};

export default Header;
