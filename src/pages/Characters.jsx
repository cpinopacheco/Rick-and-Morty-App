import Alert from "../components/Alert/Alert";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useCharactersProvider } from "../hooks/useCharactersProvider";

const Characters = () => {
  const { search, info, results, alert } = useCharactersProvider();

  return (
    <>
      <Search />
      {info &&
        (search ? (
          alert.err ? (
            <Alert msg={alert.msg} />
          ) : (
            <p className="text-center fs-4">
              Número de personajes encontrados:
              <span className="fw-bold"> {info.count}</span>
            </p>
          )
        ) : (
          <p className="text-center fs-4">
            Número total de personajes:
            <span className="fw-bold"> {info.count}</span>
          </p>
        ))}

      <div className="container text-center">
        <div className="row justify-content-center">
          {results &&
            results.map((result) => <Card key={result.id} result={result} />)}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Characters;
