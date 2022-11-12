import { useContext } from "react";
import CharactersContex from "../context/CharactersContex";

export const useCharactersProvider = () => {
  return useContext(CharactersContex);
};
