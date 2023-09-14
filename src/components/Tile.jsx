import back from "../assets/back.jpg";

export const Tile = (props) => {
  const { value, visible, clicked, index, image, onPress } = props;

  return (
    <div className="shadow-lg" onClick={() => {
      onPress(index);
    }}>
      {visible ?
        <img src={image} style={{ width: 100, height: 100 }} />
        :
        <img src={back} style={{ width: 100, height: 100 }} />
      }
    </div>
  );
};