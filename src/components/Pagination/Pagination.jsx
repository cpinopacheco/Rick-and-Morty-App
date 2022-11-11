import { scrollTop } from "../../helpers/scrollToTop";
import { useApp } from "../../hooks/useApp";

const Pagination = () => {
  const { info, pageNumber, setPageNumber } = useApp();

  const next = () => {
    setPageNumber((currentValue) => currentValue + 1);
    scrollTop();
  };

  const prev = () => {
    setPageNumber((currentValue) => currentValue - 1);
    scrollTop();
  };

  const firstPage = () => {
    if (!info) return;
    setPageNumber(1);
    scrollTop();
  };

  const lastPage = () => {
    if (!info) return;
    setPageNumber(info.pages);
    scrollTop();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5 flex-column">
      <span className="fs-2 fw-bold my-2">
        {info
          ? `Página ${pageNumber} de ${info.pages}`
          : `Página ${pageNumber}`}
      </span>

      <div>
        <button
          onClick={() => firstPage()}
          className={`${
            pageNumber === 1 && "disabled"
          } btn btn-info text-uppercase py-sm-1 px-2`}
        >
          Primera
        </button>
        <button
          onClick={() => prev()}
          className={`${
            pageNumber === 1 && "disabled"
          } btn btn-info text-uppercase ms-3 me-1 py-2`}
        >
          Anterior
        </button>
        <button
          onClick={() => next()}
          className={`btn btn-info text-uppercase ms-1 me-3 py-2 ${
            info ? pageNumber === info.pages && "disabled" : null
          }`}
        >
          Siguiente
        </button>
        <button
          onClick={() => lastPage()}
          className={`btn btn-info text-uppercase py-sm-1 px-2 ${
            info ? pageNumber === info.pages && "disabled" : null
          }`}
        >
          ultima
        </button>
      </div>
    </div>
  );
};

export default Pagination;
