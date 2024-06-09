const a = [
  { id: 1, zIndex: 1 },
  { id: 2, zIndex: 2 },
  { id: 3, zIndex: 3 },
];

// id가 1인 객체와 id가 2인 객체를 찾음
const item1 = a.find((item) => item.id === 1);
const item2 = a.find((item) => item.id === 2);

// zIndex 값 바꾸기
if (item1 && item2) {
  const tempZIndex = item1.zIndex;
  item1.zIndex = item2.zIndex;
  item2.zIndex = tempZIndex;
}
