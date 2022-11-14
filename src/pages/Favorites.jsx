import Card from "../components/Card/Card";
import NoFavorites from "../components/noFavorites/NoFavorites";
import { useFavoritesProvider } from "../hooks/useFavoritesProvider";

const Favorites = () => {
  const { favoriteCharacters } = useFavoritesProvider();

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        {favoriteCharacters ? (
          favoriteCharacters.map((result) => (
            <Card key={result.id} result={result} />
          ))
        ) : (
          <NoFavorites title={"Aún no tienes personajes favoritos"} />
        )}
      </div>
    </div>
  );
};

export default Favorites;
