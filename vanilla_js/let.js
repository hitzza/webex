// /* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-undef
// var music = "음악";
// let sport = "야구";

// console.log("music", this.music);
// console.log("music2", music);
// console.log("sports", this.sport);
// console.log("this", this);
function x() {
  // eslint-disable-next-line no-undef
  y = 1; // strict 모드에서는 ReferenceError를 출력합니다.
  // eslint-disable-next-line no-unused-vars
  var z = 2;
}

x();

// eslint-disable-next-line no-undef
console.log(y); // 로그에 "1" 출력합니다.
// eslint-disable-next-line no-undef
// console.log(z); // ReferenceError: z is not defined outside x를 출력합니다.
