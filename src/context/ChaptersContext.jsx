import { createContext, useEffect, useState } from "react";

const ChaptersContex = createContext();

const ChaptersProvider = ({ children }) => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const [chapters, setChapters] = useState(null);
  const url = `https://rickandmortyapi.com/api/episode/${id}`;

  const getChaptersById = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error("No pudimos obtener lo que buscas");

      setInfo(data);

      let charactersInTheChapter = await Promise.all(
        data.characters.map(async (character) => {
          const res = await fetch(character);
          return await res.json();
        })
      );

      setResults(charactersInTheChapter);
    } catch (error) {
      console.log(error);
    }
  };

  const getChapters = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();

      setChapters(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChaptersById();
  }, [url]);

  useEffect(() => {
    getChapters();
  }, []);

  const data = { info, results, setId, chapters };

  return (
    <ChaptersContex.Provider value={data}>{children}</ChaptersContex.Provider>
  );
};

export { ChaptersProvider };

export default ChaptersContex;
