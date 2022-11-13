import { useContext } from "react";
import ChaptersContext from "../context/ChaptersContext";

export const useChaptersProvider = () => {
  return useContext(ChaptersContext);
};
