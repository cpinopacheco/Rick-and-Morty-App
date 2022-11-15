import styles from "./NoFavorite.module.css";

const NoFavorites = ({ title, image }) => {
  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <h2>{title}</h2>
      <img src={image} className={styles.img} alt="rym aterrados" />
    </div>
  );
};

export default NoFavorites;
