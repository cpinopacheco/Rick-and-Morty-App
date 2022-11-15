import { useFavoritesProvider } from "../../hooks/useFavoritesProvider";
import styles from "./FavoriteButton.module.css";
import isFavoriteStar from "../../assets/isFavorite.png";
import isNotFavoriteStar from "../../assets/isNotFavorite.png";
import { useState } from "react";

const FavoriteButton = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { idFavoriteCharacters, setIdFavoriteCharacters } =
    useFavoritesProvider();

  const handleClick = (id) => {
    setIsFavorite(!isFavorite);

    if (idFavoriteCharacters.includes(id)) {
      const filteredFavorites = idFavoriteCharacters.filter(
        (element) => element !== id
      );
      setIdFavoriteCharacters(filteredFavorites);

      //guarda los favoritos filtrados en el localStorage
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    } else {
      setIdFavoriteCharacters([...idFavoriteCharacters, id]);

      //guarda los nuevos personajes en el localStorage
      localStorage.setItem(
        "favorites",
        JSON.stringify([...idFavoriteCharacters, id])
      );
    }
  };

  return (
    <button
      onClick={() => handleClick(id)}
      className={`${styles.favoriteButton} animate__animated animate__bounceIn animate__slow`}
    >
      <img
        src={
          idFavoriteCharacters.includes(id) ? isFavoriteStar : isNotFavoriteStar
        }
        alt="favorite-img"
      />
    </button>
  );
};

export default FavoriteButton;
