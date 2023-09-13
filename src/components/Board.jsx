import { StateContext } from "../state/StateContext";
import { Tile } from "./Tile";
import { useContext } from "react";

const getToggledItemList = (items, index) => {
  return items.map(item => {
    if (item.index === index && !item.visible && !item.clicked) {
      console.log("Board: toggling item", index);

      return  {
        value: item.value, visible: true, index: item.index, clicked: true
      };
    } else {
      return item;
    }
  });
};

const unClick = (items) => {
  return items.map(item => {
    if (item.clicked) {
      return  {
        value: item.value, visible: false, index: item.index, clicked: false
      };
    } else {
      return item;
    }
  });
};


const checkClicked = (items) => {
  const val = items.reduce((acc, item) => item.clicked ? acc + 1 : acc, 0);
  return val;
};

export const Board = () => {
  const { items, setItems, score, setScore } = useContext(StateContext);
  console.log("Board: items", items);

  const tiles = items.map((item) => {
    return <Tile
      key={item.index}
      index={item.index}
      value={item.value}
      visible={item.visible}
      clicked={item.clicked}
      onPress={(index) => {
        console.log(`Boardjsx = ${items[index]} Clicked`);
        setItems(getToggledItemList(items, index));
        const val = checkClicked(items); console.log("checking", val);

        if (val > 1) {
          setItems(unClick(items));
        }

        setScore(score + 1);
      }}
    />;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is board</h1>
      {tiles}
    </div>
  );
};