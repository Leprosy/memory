import { StateContext } from "../state/StateContext";
import { Tile } from "./Tile";
import { useContext, useState, useEffect } from "react";

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

const getClickedItemsAreEqual = (items) => {
  const clickedItems = items.filter(item => item.clicked);
  return clickedItems[0].value === clickedItems[1].value;
};

const getUnclickedList = (items, preserveVisibility) => {
  return items.map(item => {
    if (item.clicked) {
      return  {
        value: item.value, visible: preserveVisibility, index: item.index, clicked: false
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
  const { items, setItems, score, setScore, errors, setErrors } = useContext(StateContext);
  const [images, setImages] = useState([]);
  const [canClick, setCanClick] = useState(true);
  console.log("Board: items", items);

  const tiles = items.map((item) => {
    return <Tile
      image={images[item.value]}
      key={item.index}
      index={item.index}
      value={item.value}
      visible={item.visible}
      clicked={item.clicked}
      onPress={(index) => {
        if (canClick) {
          console.log(`Boardjsx = ${items[index]} Clicked`);
          setItems(getToggledItemList(items, index));
        }
      }}
    />;
  });

  useEffect(() => {
    const val = checkClicked(items);
    console.log("effect: clicked", val);

    if (val > 1) {
      console.log("End: clicked = ", getClickedItemsAreEqual(items));

      if (getClickedItemsAreEqual(items)) {
        setScore(score + 1);
        setItems(getUnclickedList(items, true));
      } else {
        setCanClick(false);
        setErrors(errors + 1);
        setTimeout( () => {
          setItems(getUnclickedList(items, false));
          setCanClick(true);
        }, 2000);
      }
    }
  }, [items]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20");
      const images = await res.json();
      const list = images.entries.map(item => item.fields.image.url);
      setImages(list);
      console.log("Board: Images fetched", list);
    };

    fetchData();
  }, []);

  return (
    <div>
      {images.length == 0
        ? (<h1 className="text-3xl font-bold underline">Loading board...</h1>)
        : <>
          <h1 className="text-3xl font-bold underline">This is board</h1>
          {tiles}
        </>
      }

    </div>
  );
};