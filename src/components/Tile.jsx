import back from "../assets/back.jpg";

export const Tile = (props) => {
  const { value, visible, clicked, index, image, onPress } = props;

  return (
    <div className="bg-sky-500" onClick={() => {
      console.log(`${value} clicked`);
      onPress(index);
    }}>
      {/* <h1 className="text-3xl">Tile {index} = {value}</h1>
      <h3>visible: {visible ? "Yes" : "No"}</h3>
  <h3>clicked: {clicked ? "Yes" : "No"}</h3> */}
      {visible ?
        <img src={image} style={{ width: 100, height: 100 }} />
        :
        <img src={back} style={{ width: 100, height: 100 }} />
      }
    </div>
  );
};