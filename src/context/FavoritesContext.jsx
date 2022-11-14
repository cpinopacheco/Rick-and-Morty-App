import { createContext, useEffect, useState } from "react";

const FavoritesContex = createContext();

const FavoritesProvider = ({ children }) => {
  const characterLocalStorage = JSON.parse(localStorage.getItem("favorites"));
  const [idFavoriteCharacters, setIdFavoriteCharacters] = useState(
    characterLocalStorage || []
  );
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const url = `https://rickandmortyapi.com/api/character/${idFavoriteCharacters}`;

  useEffect(() => {
    getFavoriteCharacters();
  }, [idFavoriteCharacters]);

  const getFavoriteCharacters = async () => {
    if (idFavoriteCharacters.length > 0) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const arrayData = [...(Array.isArray(data) ? data : [data])];

        if (!res.ok) throw new Error("No pudimos acceder a tus favoritos");

        setFavoriteCharacters(arrayData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const data = {
    idFavoriteCharacters,
    setIdFavoriteCharacters,
    favoriteCharacters:
      idFavoriteCharacters.length === 0 ? null : favoriteCharacters,
  };

  return (
    <FavoritesContex.Provider value={data}>{children}</FavoritesContex.Provider>
  );
};

export { FavoritesProvider };

export default FavoritesContex;
