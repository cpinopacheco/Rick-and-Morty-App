import Card from "../components/Card/Card";
import NoFavorites from "../components/noFavorites/NoFavorites";
import { useFavoritesProvider } from "../hooks/useFavoritesProvider";
import rymTerrified from "../assets/rick_morty_error.png";

const Favorites = () => {
  const { favoriteCharacters } = useFavoritesProvider();

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        {favoriteCharacters ? (
          <>
            <p className="text-center fs-4">
              Personajes favoritos:
              <span className="fw-bold"> {favoriteCharacters.length}</span>
            </p>
            {favoriteCharacters.map((result) => (
              <Card key={result.id} result={result} />
            ))}
          </>
        ) : (
          <NoFavorites
            title={"Aún no tienes personajes favoritos"}
            image={rymTerrified}
          />
        )}
      </div>
    </div>
  );
};

export default Favorites;
