import { checkAllVisible, getUnclickedList, getToggledItemList } from "../helpers/game";

test("game logic methods", () => {
  let list1 = [];
  let list2 = [];
  let list3 = [];

  for (let i = 0; i < 5; ++i) {
    list1.push({ index: i, value: i, clicked: true, visible: true });
    list2.push({ index: i, value: i, clicked: false, visible: false });
    list3.push({ index: i, value: i, clicked: false, visible: false });
  }

  list3[1].visible = true; list3[1].clicked = true;

  expect(checkAllVisible(list1)).toBe(true);
  expect(checkAllVisible(list2)).toBe(false);
  expect(getUnclickedList(list1).length).toBe(list1.length);
  expect(getToggledItemList(list2, 1)).toStrictEqual(list3);
});
