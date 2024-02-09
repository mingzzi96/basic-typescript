/**
 * 타입 변수 응용하기
 */

// 사례 1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// a 매개변수에 전달된 값은 string, b는 number로 만약 함수의 타입값을 T로만 지정해두었다면 오류가 난다.
// 하지만 U 타입을 b에 지정해주면 또 다른 타입의 사용이 가능해져 오류가 나지 않는다.
const [a, b] = swap("1", 2);

// 사례 2
// 0번째 index의 값은 어떤 타입의 값이여도 상관없는 제네릭, 그 이후에 들어오는 값들은 어떤 타입이고, 몇개가 들어올지 모를때 사용
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue(["a", "b", "c"]);
// "a"

let tup = returnFirstValue([1, "b", "c", 2, 3, true]);
// 1

// 사례 3
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("123456789"); // 5
let var3 = getLength({ length: 10 }); // 10
// length가 없는 그냥 number에 불과해서 오류가 난다.
// let var4 = getLength(10);
