/**
 * 타입 추론
 */

// 1. 점진적 타입 시스템 : 초기에 설정된 값이 타입이 된다.

let a = 10;
let b = "hello";
let c = {
  name: "지민",
  age: 20,
  description: {
    github: "www.gihub.com",
    skills: ["html", "javascript", "react", "typescript"],
  },
};
let { name, description, age } = c;

function func(message = "hello") {
  return message;
}

let array = [1, "hello"];

// 2. any 타입의 진화

let d; // 암묵적으로 any 타입으로 추론
d = 10; // 한번 number 타입이 되고나면
// d.toUpperCase(); 그 이후부터 재할당 해주기 전까지는 쭉 number임 그래서 오류남
d.toFixed();

d = "hello"; // string으로 재할당
// d.toFixed(); 오류남
d.toUpperCase();

// 3. const는 상수이기 때문에 리터럴 타입으로 추론된다.
const num = 10; // number가 아니라 10이다.
const hello = "hello"; // string이 아니라 hello다
