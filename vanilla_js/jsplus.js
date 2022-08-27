const checkData = [1,3];
//3항 연산자
let check = checkData===0 ? 'true' : 'false';
//?로 구분자를 지어주고 해당 조건이 참일경우 왼쪽값 거짓일경우 오른쪽값 반환
console.log(check);


//구조 분해 할당
//배열이나 객체의 속성을 해체해서, 값을 변수에 각각 대입할 수 있게 하는 문법
let data = {
    name : 'Dave',
    age : 30
};
/*
let {age, name} = data;//동일한 프로퍼티명을 써줘야, 해당 프로파티에 맞는 값이 대입됨

console.log(age,name);

//프로퍼티명가 다른 변수명을 사용하고자 할 경우, 대입할 프로퍼티명: 다른 변수명 의 형태로 써줘야 함
let {name : myName, age : myAge} = data;
console.log(myAge,myName);

//꼭 객체의 모든 프로파티를 가져올 필요는 없고, 객체의 프로퍼티 중 가져오고 싶은 데이터만 가져올 수 있음
let {name : myName2} = data;
console.log(myName2);
*/
//가져올 프로퍼티가 정의되어 있지 않은 경우에는 디폴트 값으로 대입하겍끔도 가능
let {name, hobby = 'coding'} = data;
console.log(name, hobby);
console.log(data);//변수에 값을 할당하는거지 객체 속성 자체를 수정하는건 아님





//배열 분해 할당
//배열의 각 아이템을 별도 변수에 할당하는 문법
let arr1 = [1,2,3,4];
let [first,second, third, fourth] = arr1;

console.log(first,second,third,fourth);

let [data1,data2] = arr1;
console.log(data1,data2);//배열의 일부만 추출 가능, 첫벉재 아이템부터 대입, 대입할 변수가 없을 경우는 대입하지 않음
//반대로 변수 개수가 실제 값보다 많을 경우 undefined가 할당됨
let [,,data3,data4,data5,data6='new'] = arr1;
//콤마를 사용해 해당 값을 건너뛰고 변수 할당도 가능
console.log(data3,data4,data5,data6);
//객체와 마찬가지로 기본값 할당가능, 해당 변수에 값을 설정해서 undefined가 되자 않게도 가능

const [item1,...item2] = arr1;
//...을 사용해서 나머지 값을 배열 하나에 담는것도 가능(제일 마지막에 선언해야함)
console.log(item1,item2);