// 타입 별칭
// 실제로 컴파일 해보면, User라는 타입 별칭은 사라짐
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: number;
  location: string;
};

let user1: User = {
  id: 1,
  name: "권지민",
  nickname: "mingming",
  birth: 961028,
  location: "Seoul",
};

// 타입 별칭
let user2: User = {
  id: 2,
  name: "밍찌",
  nickname: "mingzzi",
  birth: 961030,
  location: "Seoul",
};
