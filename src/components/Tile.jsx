export const Tile = (props) => {
  const { value, visible, clicked, index, onPress } = props;

  return (
    <div className="bg-sky-500" onClick={() => {
      console.log(`${value} clicked`);
      onPress(index);
    }}>
      <h1 className="text-3xl">Tile {index} = {value}</h1>
      <h3>visible: {visible ? "Yes" : "No"}</h3>
      <h3>clicked: {clicked ? "Yes" : "No"}</h3>
    </div>
  );
};