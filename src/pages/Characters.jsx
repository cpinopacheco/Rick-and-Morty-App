import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import { useApp } from "../hooks/useApp";

const Characters = () => {
  const { results } = useApp();

  return (
    <div>
      <Search />
      <div className="container text-center">
        <div className="row">
          {results &&
            results.map((result) => (
              <Card key={result.id} result={result}></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
