import { useContext } from "react";
import FavoritesContex from "../context/FavoritesContext";

export const useFavoritesProvider = () => {
  return useContext(FavoritesContex);
};
