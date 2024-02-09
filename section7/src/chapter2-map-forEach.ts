/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2,4,6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());
// 반환되는 값이 항상 string으로 같을 수 없으니, map 함수에 U타입 추가
map(["hi", "hello"], (it) => parseInt(it));

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
arr.forEach((it) => console.log(it));

// forEach 메서드는 아무것도 반환하지 않으니깐 void
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
