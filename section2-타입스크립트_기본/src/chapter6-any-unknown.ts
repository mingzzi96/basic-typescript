// any
// 특정 변수의 타입을 모를 때 사용한다.
// 모든 타입을 허용한다.

let anyVar: any = 10;
let num: number = 10;
num = anyVar;

// 모든 타입을 허용하지만 런타임에서 오류가 날 수 있다.
anyVar = "";
anyVar = () => {};
anyVar = {};

// unknown
// any와 마찬가지로 모든 타입이 허용된다.

let unknownVar: unknown;

unknownVar = "";
unknownVar = () => {};
unknownVar = {};

// 반드시 타입을 지정해 주었을 때만 num 변수를 number 타입으로 정제해서 사용할 수 있다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}
