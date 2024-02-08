// 객체 타입간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "밍도그",
  color: "brown",
  breed: "푸들",
};

animal = dog;
// Animal 타입 객체에는 추가적인 프로퍼티 'breed'가 존재하지 않기 때문에 오류난다.
// Animal이 슈퍼 타입 Dog 같이 추가 프로퍼티가 있는 타입이 서브 타입이 된다.
// dog = animal;
