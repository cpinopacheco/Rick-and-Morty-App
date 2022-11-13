const Dropdown = ({ total, name, setId }) => {
  const totalChapters = Array(total).fill().map(Number.call, Number);

  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id={name}
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Elegir capitulo
        </option>
        {totalChapters.map((chapter) => {
          return (
            <option key={chapter + 1} value={chapter + 1}>
              {name} - {chapter + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
