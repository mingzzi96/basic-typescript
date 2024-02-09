/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
  sayHi(): void; // or sayHi: () => void;
  sayHi(a: number, b: number): void;
}

// 유니언/인터섹션 타입 사용하고 싶으면 타입 별칭에다가 넣어주어야 한다.
type Type1 = number | string | Person;
type Type2 = number & string & Person;

// 유니언/인터섹션 타입 사용하고 싶으면 타입 별칭에다가 넣어주거나 아래처럼 사용하자.
const person: Person | number = {
  name: "권지민",
  age: 19,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
