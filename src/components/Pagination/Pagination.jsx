const Pagination = ({ pageNumber, setPageNumber }) => {
  const next = () => {
    setPageNumber((currentValue) => currentValue + 1);
  };

  const prev = () => {
    setPageNumber((currentValue) => currentValue - 1);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <button
        onClick={() => prev()}
        className={`${
          pageNumber === 1 && "disabled"
        } btn btn-info text-uppercase mx-5`}
      >
        Anterior
      </button>
      <span className="fs-2 fw-bold">{pageNumber}</span>
      <button
        onClick={() => next()}
        className="btn btn-info text-uppercase mx-5"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
