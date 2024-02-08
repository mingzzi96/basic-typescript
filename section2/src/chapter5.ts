// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입 별칭과 다르게 중괄호 사이에 =이 없다.

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  Korea = "ko",
  English = "en",
}

const user1 = {
  name: "권지민",
  role: Role.ADMIN, // 관리자
  lang: Language.Korea,
};
const user2 = {
  name: "밍밍이",
  role: Role.USER, // 일반 유저
};
const user3 = {
  name: "밍찌",
  role: Role.GUEST, // 게스트
};
