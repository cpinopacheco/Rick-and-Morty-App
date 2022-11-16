import { createContext, useEffect, useState } from "react";

const CharactersContex = createContext();

const CharactersProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [alert, setAlert] = useState({});
  const { info, results } = fetchedData;
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const getCharacters = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error("Personaje no encontrado");

      setFetchedData(data);
      setAlert({ err: false, msg: null });
    } catch (error) {
      setAlert({ err: true, msg: error.message });
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [url]);

  const data = {
    results,
    setPageNumber,
    pageNumber,
    search,
    setSearch,
    info,
    alert,
  };

  return (
    <CharactersContex.Provider value={data}>
      {children}
    </CharactersContex.Provider>
  );
};

export { CharactersProvider };

export default CharactersContex;
