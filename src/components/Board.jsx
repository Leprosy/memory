import { StateContext } from "../state/StateContext";
import { Tile } from "./Tile";
import { useContext, useState, useEffect } from "react";
import {
  getToggledItemList,
  checkClicked,
  getClickedItemsAreEqual,
  getUnclickedList,
  checkAllVisible
} from "../helpers";
import { fetchData } from "../helpers/data";

export const Board = () => {
  const { items, setItems, score, setScore, errors, setErrors } = useContext(StateContext);
  const [images, setImages] = useState([]);
  const [canClick, setCanClick] = useState(true);
  const [hasWon, setHasWon] = useState(false);

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
          setItems(getToggledItemList(items, index));
        }
      }}
    />;
  });

  // Check tile list for win condition or score/errors updates
  useEffect(() => {
    const val = checkClicked(items);

    if (val > 1) {
      if (getClickedItemsAreEqual(items)) {
        setScore(score + 1);
        setItems(getUnclickedList(items, true));
      } else {
        setCanClick(false);
        setErrors(errors + 1);
        setTimeout( () => {
          setItems(getUnclickedList(items, false));
          setCanClick(true);
        }, 1000);
      }
    }

    if (checkAllVisible(items) && score > 0) {
      setHasWon(true);
    } else {
      setHasWon(false);
    }
  }, [items]);

  // Get images
  useEffect(() => {
    const doFetch = async () => {
      const list = await fetchData();
      setImages(list);
    };

    doFetch();
  }, []);

  return (
    <div className="basis-2/3">
      {images.length == 0
        ? (<h1 className="text-3xl font-bold underline">Loading board...</h1>)
        : <>
          <h1 className="text-3xl font-bold underline">
            {hasWon ? "You win!" : "" }
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {tiles}
          </div>
        </>
      }
    </div>
  );
};