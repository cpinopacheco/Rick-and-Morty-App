import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";
import { useChaptersProvider } from "../hooks/useChaptersProvider";

const Chapters = () => {
  const { info, results, setId, chapters } = useChaptersProvider();
  const { air_date, name, id } = info;
  const totalChapters = chapters ? chapters.info.count : null;

  return (
    <div className="container">
      <h1 className="text-center">
        Capítulo {id}: {name === "" ? "Desconocido" : name}
      </h1>
      <p className="text-center">
        Fecha de estreno: {air_date === "" ? "Desconocido" : air_date}
      </p>

      <div className="col-lg-6 mx-auto mb-4">
        <Dropdown setId={setId} total={totalChapters} name="Capitulo" />
      </div>
      <hr />
      <div className="container text-center">
        <div className="row">
          {results &&
            results.map((result) => <Card key={result.id} result={result} />)}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
