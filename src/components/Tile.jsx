import back from "../assets/back.jpg";

export const Tile = (props) => {
  const { visible, index, image, onPress } = props;

  return (
    <div className="w-full h-0 shadow-lg pb-full rounded-xl bg-yellow-300" onClick={() => {
      onPress(index);
    }} style={{ backgroundImage: `url(${visible ? image : back})`, backgroundSize: "100% 100%" }}>
    </div>
  );
};