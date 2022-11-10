import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  const getCharacters = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error("No se pudo obtener los personajes");

      setFetchedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [url]);

  const data = { fetchedData };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };

export default AppContext;
