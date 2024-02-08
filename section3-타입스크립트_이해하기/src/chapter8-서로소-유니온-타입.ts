/**
 * 서로소 유니온 타입
 * 교집합이 타입으로만 만든 유니온 타입
 * string | number 두 타입은 서로 교집합이 없는 유니온 타입이다. 이를 서로소 유니온 타입이라 한다.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Adming: "{name}님 현재까지 {kickCount}명 강퇴했습니다."
// Member: "{name}님 현재까지 {point}점 모았습니다."
// Guest: "{name}님 현재까지 {visitCount}번 방문했습니다."
function login(user: User) {
  if (user.tag === "ADMIN") {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member
    console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
  } else {
    // guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
  }
}

/**
 * 복습겸 한가지 더 사례
 */

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 : 로딩중입니다.
// 실패 : 에러메시지 출력
// 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중입니다.");
      break;
    case "FAILED":
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}

// 비동기 작업의 결과를 처리하는 객체
const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류가 발행했어용. 원인은 ~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
