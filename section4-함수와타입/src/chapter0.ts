/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과를 반환하는지 이야기하는 것.
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "권지민", age: number, tall?: number) {
  console.log(`name: ${name}`);
  // 아래 코드는 오류가 난다. tall 매개변수는 undefined | number라서 undefined와의 연산은 불가능하기 때문.
  //   console.log(`tall: ${tall + 10}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("권지민", 96, 162);
introduce("권지민", 26);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
