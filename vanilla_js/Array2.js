/*
const data = [1,2,3];

data.push('hi');//배열 맨 끝에 데이터 추가
console.log(data);
console.log(data.pop());//배열 맨 끝 데이터 리턴 후 꺼냄
console.log(data);
*/
/*
const myArray = [1,2,'Dave',400];
console.log(myArray.shift());//배열 맨 처음 데이터 리턴 후 꺼내고 뒤에 있는 데이터를 앞으로 당김
console.log(myArray);

const arr1 = [1,2];
const arr2 = ['Dave', 200];

let arr12 = arr1.concat(arr2);//concat = 두 배열 합치기
console.log(arr12);
*/
/*
const data1 = [1,2,3,4,5,6];
const data2 = data1.join('*');//배열의 데이터사이에 구분자를 넣어서 문자열로 반환
console.log(data2, typeof data2);

const data = [1,2,3,4,5,6];
//console.log(data.reverse());//배열을 역순으로 재배치
console.log(data.slice(1,2));//배열의 일부분을 반환 slice(인덱스 번호부터, 해당 인덱스 -1까지),파이썬과 비슷
*/


/*
let myArray = [1,2,'Dave',100];
myArray.forEach(item =>{//for 문을 대신해서, 간단히 배열의 각 이이템을 가져올 수 있는 함수
    console.log(item);
});

const arr1 = [1,2,3,5,10];
const arr2 = arr1.map(item => item *2);//배열의 각 아이템에 정의한 함수를 적용해서, 새로운 배열을 리턴하는 함수
console.log(arr2);//numpy의 broadcasting과 비슷한듯

let index = arr2.indexOf(20);//해당 배열에서 지정한 데이터가 위치한 인덱스 번호를 리턴
console.log(index);
*/

/*
const myArray = [
    {
        id : 1,
        name : 'Dave Lee'
    },
    {
        id : 2,
        name : 'Alex'
    }
];
console.log(myArray.indexOf('Alex'));//배열의 아이템이 객체인 경우 findOf함수가 제대로 동작하지 않음
console.log(myArray.findIndex(item => item.name === 'Alex'));
//배열의 아이템이 객체일 경우 findIndex함수를 사용해야함(해당 값이 있는 인덱스 번호를 리턴)
console.log(myArray.find(item => item.name === 'Alex'));
//배열의 아이템이 객체이고, 원하는 값이 들어있는 객체를 찾을때는 find함수 사용
*/

let myArray = [1,2,3,4,5,6,7,8,9,10];
let even = myArray.filter(item => item %2 === 0);
//filter = 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능
console.log(even);