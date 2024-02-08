let numArr = [1, 2, 3];
let strArr = ["a", "b", "c"];
// 제네릭 표기법
let boolArr = [true, false];
// 유니언
let multiArr = ["hello", 123];
let doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; 길이를 벗어나면 안됨
// tup1 = ["hello", 1]; 오직 number 타입만 허용됨
let upt2 = ["1", 2, true];
export {};
