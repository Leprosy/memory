/*
 * Shuffles an array
 */
export const shuffle = (array) => {
  const result = [], itemsLeft = array.concat([]);

  while (itemsLeft.length) {
    const randomIndex = Math.floor(Math.random() * itemsLeft.length);
    const [randomItem] = itemsLeft.splice(randomIndex, 1);
    result.push(randomItem);
  }

  return result;
};