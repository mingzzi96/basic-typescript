let user: {
  // optional property : id 값이 있어도 되고 없어도 될때 물음표를 사용한다.
  id?: number;
  name: string;
} = {
  id: 1,
  name: "권지민",
};

user = {
  name: "홍길동",
};

let config: {
  // readonly는 프로퍼티의 값을 바꾸는 행위를 막아준다.
  readonly apiKey: string;
} = {
  apiKey: "API KEY",
};

// config.apiKey = "WHATEVER";
