// void = 공허 = 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// void로 타입 지정된 변수에는 그 어떤 값도 담을 수 없다.
let a: void;
// a = 1;
// a = "hello";
// a = true;
// a = {};

// undefined만 담을 수 있다.
a = undefined;

// tsconfig.json파일에서 strictNullChecks false로 지정하면
// 예외적으로 null을 담을 수 있게 된다.
// a = null;

// never
// never = 존재하지 않는 = 불가능한 타입

function func3(): never {
  // 무한루프를 돌아서 애초에 정상적인 값 반환이 되지 않는 상황
  while (true) {}
}

function func4(): never {
  throw new Error("실행되자마자 종료될 것이기 때문에 never를 사용");
}

// 절대 아무런 타입의 값도 담을 수 없다.
// strictNullChecks false로 지정해주어도 null값을 담을 수 없다.
let neverVar: never;
let anyVar: any;

// neverVar = "";
// neverVar = true;
// neverVar = 123;
// neverVar = {};
// neverVar = null;
// neverVar = undefined;
// neverVar = anyVar; 이것도 불가능
