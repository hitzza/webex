/*
console.log('Hello');
setTimeout(() => {
    console.log('동기 비동기 실험입니다.');
}, 3000);

console.log('world!');
//동기적 실행으로 Hello와 world!가 콘솔창에 먼저 실행되지만
//비동기 요소 중 하나인 타이머 setTimeout함수는 코드 순서상 먼저지만, 먼저 실행되지 않고
//3초가 지난 후 실행
*/

//비동기 처리의 문제점
//예를 들어, Rest API를 호출해서 결과값을 받아서, 이를 기반으로 코드를 실행하는 경우 
//해당 함수 호출 후, 결과값을 받지 않은 채로, 다음 코드가 실행되면, 전체 코드 실행에 문제가 됨

//비동기 처리의 문제점을 해결할 수 있는 콜백함수

function func1(callback){
    setTimeout(
        ()=>{
            console.log('fucn1');
            callback();
        }
    , 1000);
}
function func2(){
    console.log('func2');
}
func1(func2);

//자바 스크립트의 함수는 first-class function임을 이용해
//비동기 처리의 순서 문제점을 해당 방법으로 해결이 가능
//원하는 순서대로 func1이 실행된 후 func2를 실행 가능


//해당 방법으로 첫 번째 코드를 순서대로 조정한다면
console.log('Hello');
function functest1(callback){
    setTimeout(
        () => {
            console.log('Asynchronous');
            callback();
        }
    ,1000);
}
function functest2(){
    console.log('World!');
}
functest1(functest2);