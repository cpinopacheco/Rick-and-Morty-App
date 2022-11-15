import FavoriteButton from "../FavoriteButton/FavoriteButton";
import MainButton from "../MainButton/MainButton";
import Modal from "../Modal/Modal";

const Card = ({ result }) => {
  const { id, name, image, origin, gender, species, location, status } = result;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
      <div className="card m-3 m-md-2 my-md-3 shadow bg-body rounded position-relative animate__animated animate__fadeIn">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-title fw-bold">{name}</h4>
          <div className="mb-3">
            <span className="text-gray fw-semibold">origin:</span>
            <p className="card-text fs-5">{origin.name}</p>
          </div>
          <div className="mt-4 mb-3">
            <MainButton id={id} />
          </div>
        </div>
        <FavoriteButton id={id} />
      </div>
      <Modal
        id={`id${id}`}
        name={name}
        gender={gender}
        species={species}
        image={image}
        location={location}
        status={status}
      />
    </div>
  );
};

export default Card;
