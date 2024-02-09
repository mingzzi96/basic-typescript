/**
 * 인터페이스 선언 합침
 * 타입 별칭과 달리 interface는 중복 선언이 가능하고 그것들의 타입은 합쳐진다.
 * 선언 중복된 상황에서는 반드시 같은 타입으로의 확장만 가능하다.
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

let person: Person = {
  name: "",
  age: 12,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

// interface 중복 선언을 통해 추가할 수 있다.
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hi",
};
