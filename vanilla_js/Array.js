/*
//배열 선언 시 객체처럼 선언도 가능
const myArray = new Array();//해당 방식으로 빈 Array생성 가능
myArray[0] = 1;

myArray[2] = 2;

console.log(myArray.length);//중간값을 선언하지 않아도 빈자리로 할당 
console.log(myArray);
console.log(myArray[1]);//선언하지 않은 값은 null이 아닌 undefined


//배열 삭제
//배열변수.splice(삭제를 시작할 인덱스번호, 삭제를 시작할 인덱스 번호부터 몇 개를 삭제할지 갯수)

const spliceTest = [1,2, 'Dave', 100];
spliceTest.splice(1,1);
console.log(spliceTest);
const spliceTest2 = [1,2, 'Dave', 100];
spliceTest.splice(1,2);
console.log(spliceTest2);
*/

const data1 = [1,2,'Dave', null];
console.log(typeof data1[3]);//배열 속에 null을 삽입해도 object로 취급

const data2 = [
    { name : 'Dave', age : 30},
    { name : 'Alex', age : 50}
];

const data3 = [
    [1,2,3],
    [4,5,6]
];

console.log(data2[0].name);//배열 자체도 object이기 때문에 .name을 써서 호출이 가능
console.log(data3[0][0]);//2차원 배열 요소 접근
console.log(data3.length);