// /*
// const arr = [1,2,3]
// arr.forEach(console.log);
// arr.forEach(alert);
// console.log(score);
// scroe =80;
// var score;
// console.log(score)
// var a = 0.1 + 1.1
// i = parseInt(a)
// f = parseFloat(a)
// console.log(i===f)
// */
// /*
// let tyepTest1 = undefined;
// let tyepTest2 = null;
// console.log(typeof tyepTest1,typeof tyepTest2);
// console.log(tyepTest1, tyepTest2)
// console.log(tyepTest1 == tyepTest2);
// console.log(tyepTest1 === tyepTest2);
// */
// const arrtest = [];
// arrtest[2] = 3;
// console.log(arrtest, arrtest.length);
// const und=[];
// let undlet;
// console.log(und);
// console.log(undlet);
// console.log(Array.isArray(und));
// console.log(Array.isArray(arrtest));
// console.log(Array.isArray(undlet));

// //control + option + n  == run javascript

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
var music = "음악";
let sport = "야구";

console.log("music", this.music);
console.log("sports", this.sport);
console.log("this", this);
console.log("winMusic", window.music);
console.log("winSport", window.sport);

// eslint-disable-next-line no-debugger
// debugger;
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

let l0 = "l0";

function a() {
  let l1 = "l1";
  console.log(l0, l1);
}
a();
// console.log(l0, l1); error
