/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// person 객체를 Person 타입으로 단언한다.
let person = {} as Person;
person.name = "권지민";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

// 추가 프로퍼티가 있을 경우에도 타입을 단언해 주어야 한다.
let dog = {
  name: "밍찌",
  color: "brown",
  breed: "푸들",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B 일 때
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.
 */

// A는 number B는 never로 모든 타입의 서브타입
// 즉, A는 B의 슈퍼타입이기 때문에 타입 단언이 이뤄진다.
let num1 = 10 as never;

// A는 number B는 unknown으로 모든 타입의 슈퍼타입이다.
// 즉, A는 B의 서브타입이기 때문에 타입 단언이 이뤄진다.
let num2 = 10 as unknown;

// A는 number B는 string으로 둘 다 서로의 슈퍼타입도, 서브타입도 아니다.
// 타입 단언이 이뤄질 수 없다.
// let num3 = 10 as string;

// 하지만 꼼수를 부릴 수 있다.
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

// const 상수로 선언한 것과 같은 효과를 낸다.
// const 변수가 아니여도, 리터럴 타입으로 단언되어짐.
let num4 = 10 as const;

// 객체에서 const 단언을 해주면 readonly객체로 추론된다.
let cat = {
  name: "야옹",
  color: "yellow",
} as const;

// readonly 니까 프로퍼티의 value 값 수정이 불가능하다.
// cat.name = "강아지"; 오류남

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "첫 게시글",
  author: "권지민",
};

// 옵셔널 체이닝을 이용하면 number타입을 가진 len에 undefined가 할당될 가능성도 존재하기 때문에 오류가 난다.
// const len: number = post.author?.length;

// 물음표 대신 !를 사용하여 에러를 없애줄 수 있다.
// 이렇게 해주면 JS 컴파일러가 ! 앞의 값은 null이나 undefined가 아닐거라 믿도록 만들어 준다.
const len: number = post.author!.length;
