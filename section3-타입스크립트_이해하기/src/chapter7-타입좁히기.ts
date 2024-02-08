/**
 * 타입 좁히기
 * 조건문 등을 통해 넓은 타입에서 좁은 타입으로 상황에따라 변경시키는 것을 의미한다.
 */

type Person = {
  name: string;
  age: number;
};

// value = number ? toFixed : toUpperCase 를 적용시켜 보자.
// value = Date ? getTime() 출력
// value = Person ? name은 age살입니다 출력
function func(value: string | number | Date | null | Person) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (value instanceof Date) {
    // typeof는 null도 object로 출력한다.
    // 그로인해 value의 타입은 Date이거나 null일 것이라 추론하게되고, null에는 getTime메서드를 쓸 수 없으니 오류가 난다.
    // 이런 상황을 방지하기 위해 instanceof를 사용해 준다. (왼쪽의 value 값이 오른쪽(Date)의 instance야? 하고 물어보는 역할)
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in연산자 뒤에는 null/undefined 값이 사용될 수 없기 때문에 value가 null이 아님을 먼저 명시해주었다.
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
