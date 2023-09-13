export const Tile = (props) => {
  const { label, index, visible } = props;

  return (
    <div className="bg-sky-500" onClick={() => console.log(`${label} clicked`)}>
      <h1 className="text-3xl">Tile {label}</h1>
      <h3>visible: {visible ? "Yes" : "No"}</h3>
    </div>
  );
};