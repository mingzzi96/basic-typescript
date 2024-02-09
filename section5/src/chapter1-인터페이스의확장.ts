/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

// extends를 사용해서 확장(상속)시켜 준다.
interface Dog extends Animal {
  isBark: boolean;
}

// Animal의 name과 age 프로퍼티가 확장되어 Dog에 사용됨
let dog: Dog = {
  name: "",
  age: 12,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  name: "mingming"; // Animal에서 받아온 프로퍼티 값을 수정할 수 있다. 하지만 number와 같이 완전 다른 타입으로 재정의하는 것은 불가능하다.
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

let dogCat: DogCat = {
  name: "",
  age: 12,
  isBark: true,
  isScratch: true,
};
