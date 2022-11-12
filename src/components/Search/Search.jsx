import { useCharactersProvider } from "../../hooks/useCharactersProvider";
import styles from "./Search.module.css";

const Search = () => {
  const { setSearch, setPageNumber } = useCharactersProvider();

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  const cleanInput = () => {
    setPageNumber(1);
    setSearch("");
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="Busca tú personaje"
          required=""
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={() => cleanInput()}
          className={styles.reset}
          type="reset"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6"
            fill="none"
            viewBox="5 1.5 25 25"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div>
          <svg
            width="25"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default Search;
