/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
let item = 1;

switch (item) {
  case 1:
    let sport;
    break;
  case 2:
  // let sport;
  default:
    console.log(sport);
}
//case, default는 블록 스코프가 아님

let sport = "축구";

if (sport) {
  //   let sport = "농구";
  console.log("안:", sport);
  //블록 스코프 안쪽 변수가 블록 스코프 밖의 변수를 참조 할 수 있지만 바깥쪽 변수가 안쪽 변수로는 불가능
}
console.log("밖:", sport);
