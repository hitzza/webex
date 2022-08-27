/*
//변수값 교환하기
let a= 1;
let b=2;
[a,b] = [b,a];
console.log(a,b);

//함수 리턴시 여러 데이터 넘겨주기
function getData(){
    return [10,20];
}
let [c,d] = getData();
console.log(c,d);

//문자열 분리해서, 각각의 변수에 대입하기
let data = 'Dave Lee,Alex';
console.log(data.split(' '));
console.log(data.split(','));
//파이썬의 split과 비슷, 배열 형식으로 리턴
let [name1, name2] = data.split(',');
//해당 방식으로 각각의 변수에 저장 가능
console.log(name1,name2);
*/

//rest 파라미터
//rest파라미터는 함수 인자 선언 앞에 ...을 붙여서 정의
//해당 함수에 전달된 인자 리스트는 하나의 배열로 해당 변수에 넣어짐
function getData(a,b,...rest){//파이썬의 *args와 비슷!
    console.log(rest);//값이 하나여도 배열로 리턴
    // typeof rest 실행시는 object로 출력되믈, Array.isArray()의 경우 인자 값이 배열이면
    //true를 리턴하므로, 이를 사용해서 해당 변수가 배열임을 확인
    console.log(Array.isArray(rest));
    let [item1,item2,item3,item4] = rest;
    //배열이기 때문에 배열분해할당도 가능
    console.log(a,b);
    console.log(item1,item2);
}

getData(10,12,123,14,15);


//spread 파라미터
//rest 파라미터와 마찬가지로 ...을 붙여서 정의허는 문법
//iterable한 변수 앞에 붙여서, 해당 변수의 데이터를 개별 아이템으로 분리함
//iterable이란 반복 가은한 객체를 의미하며, 배열,문자열 등을 의미함

const itertest = [1,2,3,4];
console.log(itertest);
console.log(...itertest);

const test = [0,...itertest, 4,5,6];
//헤당 변수처럼 배열속에 사용도 가능
console.log(test);

function func(a,b,c,d){
    console.log(b,c);
}
func(...itertest);//이렇게 배열을 풀어서 함수인자로도 사용 가능
