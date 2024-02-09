/**
 * 제네릭
 */

// 제네릭 함수
// T = Type
function func<T>(value: T): T {
  return value;
}

// 함수를 호출 할 때 마다 타입을 알맞게 정해준다.
func(10);
func("hello");
func(true);

// 튜플 타입으로 만들고 싶을 때
// 꺽쇠 안에 적힌 type들이 제네릭 함수 T에 할당된다.
let arr = func<[number, number, number]>([1, 2, 3]);
