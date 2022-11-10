import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { useApp } from "../hooks/useApp";

const Characters = () => {
  const { results, pageNumber, setPageNumber } = useApp();

  return (
    <>
      <Search />
      <div className="container text-center">
        <div className="row">
          {results &&
            results.map((result) => <Card key={result.id} result={result} />)}
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};

export default Characters;
