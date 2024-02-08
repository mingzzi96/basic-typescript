// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입 별칭과 다르게 =이 없다.
var Role;
(function (Role) {
    Role[Role["AMIN"] = 0] = "AMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "권지민",
    role: Role.AMIN, // 관리자
};
const user2 = {
    name: "밍밍이",
    role: Role.USER, // 일반 유저
};
const user3 = {
    name: "밍찌",
    role: Role.GUEST, // 게스트
};
export {};
