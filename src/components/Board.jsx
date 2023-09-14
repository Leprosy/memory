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
    const fetchData = async () => {
      const res = await fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20");
      const images = await res.json();
      const list = images.entries.map(item => item.fields.image.url);
      setImages(list);
    };

    fetchData();
  }, []);

  return (
    <div>
      {images.length == 0
        ? (<h1 className="text-3xl font-bold underline">Loading board...</h1>)
        : <>
          <h1 className="text-3xl font-bold underline">
            {hasWon ? "You win!" : "This is board" }
          </h1>
          {tiles}
        </>
      }
    </div>
  );
};