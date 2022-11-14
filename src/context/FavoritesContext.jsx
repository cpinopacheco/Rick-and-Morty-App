import { createContext, useState } from "react";

const FavoritesContex = createContext();

const FavoritesProvider = ({ children }) => {
  const [idFavoriteCharacters, setIdFavoriteCharacters] = useState([]);

  const data = {
    idFavoriteCharacters,
    setIdFavoriteCharacters,
  };

  return (
    <FavoritesContex.Provider value={data}>{children}</FavoritesContex.Provider>
  );
};

export { FavoritesProvider };

export default FavoritesContex;
