/*
 * Shuffles an array
 */
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

/*
 * Game logic
 */
export const getToggledItemList = (items, index) => {
  return items.map(item => {
    if (item.index === index && !item.visible && !item.clicked) {
      return  {
        value: item.value, visible: true, index: item.index, clicked: true
      };
    } else {
      return item;
    }
  });
};

export const getClickedItemsAreEqual = (items) => {
  const clickedItems = items.filter(item => item.clicked);
  return clickedItems[0].value === clickedItems[1].value;
};

export const getUnclickedList = (items, preserveVisibility) => {
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

export const checkClicked = (items) => {
  const val = items.reduce((acc, item) => item.clicked ? acc + 1 : acc, 0);
  return val;
};

export const checkAllVisible = (items) => !items.some(item => item.visible === false);