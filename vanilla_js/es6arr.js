//Array.from(변환대상,전개할 때다 호출할 함수,함수에서 this로 참조할 오브젝트)
//ex
const like = { 0: 10, 1: 20, length: 2 };
console.log(
  Array.from(
    like,
    function (value) {
      return value + this.plus;
    },
    { plus: 70 }
  )
);
//Array.of(뱐환대상)
const result = Array.of(1, 2, 3);
console.log(result);
