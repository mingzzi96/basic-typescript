// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

/*
 * 1. 합집합 타입
 */
let a: string | number | boolean;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 두 타입이 공통으로 가지는 name 프로퍼티만을 객체에 넣어주면 오류가 난다.
// 합집합의 외부에 존재할 수 밖에 없기 때문이다.
// let union4: Union1 = {
//   name: "",
// };

/*
 * 2. 교집합 타입 - intersection 타입
 */
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

// 프로퍼티가 하나라도 빠지면 안됨
let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
