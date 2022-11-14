import styles from "./Modal.module.css";

const Modal = ({ id, name, gender, species, image, location, status }) => {
  return (
    <div
      className="modal fade"
      id={id}
      aria-labelledby="modalCharacter"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-sm-flex gap-3 px-lg-5 py-4">
            <img src={image} className={styles.modalImage} alt={name} />

            <div className="mx-auto">
              <h5
                className="fw-bold fs-3 text-center m-3 modal-title"
                id="exampleModalLabel"
              >
                {name}
              </h5>
              <p
                className={`${
                  status === "Alive"
                    ? "bg-success"
                    : status === "Dead"
                    ? "bg-danger"
                    : "bg-secondary"
                } text-light text-uppercase rounded`}
              >
                {status}
              </p>
              <p className="text-uppercase">
                <span className="fw-semibold">Género:</span>
                {gender}
              </p>
              <p className="text-uppercase">
                <span className="fw-semibold">Especie:</span>
                {species}
              </p>
              <p className="text-uppercase">
                <span className="fw-semibold">Ubicación: </span> {location.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
