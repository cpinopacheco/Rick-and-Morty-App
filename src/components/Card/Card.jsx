import MainButton from "../MainButton/MainButton";

const Card = ({ result }) => {
  const { name, image, origin } = result;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
      <div className="card m-3 m-md-2 my-md-3 shadow bg-body rounded">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-title fw-bold">{name}</h4>
          <div className="mb-3">
            <span className="text-gray fw-semibold">origin:</span>
            <p className="card-text fs-5">{origin.name}</p>
          </div>
          <div className="mt-4 mb-3">
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
