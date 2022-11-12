import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const getCharacters = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error("No pudimos obtener lo que buscas");

      setFetchedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [url]);

  const data = { results, setPageNumber, pageNumber, search, setSearch, info };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };

export default AppContext;
