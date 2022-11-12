import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useCharactersProvider } from "../hooks/useCharactersProvider";

const Characters = () => {
  const { search, info, results } = useCharactersProvider();

  return (
    <>
      <Search />
      {info &&
        (search ? (
          <p className="text-center fs-4">
            Personajes encontrados: {info.count}
          </p>
        ) : (
          <p className="text-center fs-4">
            Cantidad de personajes: {info.count}
          </p>
        ))}
      <div className="container text-center">
        <div className="row">
          {results &&
            results.map((result) => <Card key={result.id} result={result} />)}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Characters;
