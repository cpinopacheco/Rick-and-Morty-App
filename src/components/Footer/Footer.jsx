import styles from "./Footer.module.css";
import personalLogo from "../../assets/Original.png";

const Footer = () => {
  return (
    <footer className="bg-info">
      <div className={styles.containerFooter}>
        <img src={personalLogo} className={styles.logo} alt="logo-personal" />
        <div className={styles.containerContact}>
          <a
            href="mailto:cpinopacheco64@gmail.com"
            className={styles.linkContact}
            title="Enviar E-mail"
          >
            cpinopacheco64@gmail.com
          </a>
          <a
            href="tel:+56957409074"
            className={styles.linkContact}
            title="Llamar"
          >
            +56 9 57409074
          </a>
        </div>
        <p className={styles.copyRight}>
          <small> &copy; Todos los Derechos Reservados</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
