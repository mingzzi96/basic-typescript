/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// {: animal is Dog} 는 이 함수가 true를 return 한다면 강아지라는 뜻임을 알려줌
// 이렇게 명시해 주어야 타입 좁히기가 잘 이루어진다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // dog
  } else {
    // cat
  }
}
