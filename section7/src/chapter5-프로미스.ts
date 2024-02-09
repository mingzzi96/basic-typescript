/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

// error는 어떤것이 들어올지 모르기 때문에
// 타입 좁히기를 프로젝트에 맞게 활용하여 에러를 출력해 주어야 한다.
promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수의 반환값의 타입을 명시해 주어야 오류가 나지 않는다.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "content",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
