/*
//Promise 객체 생성
const runCode = new Promise(
    //비동기 작업 수행
    (resolve, rejcet) => {
        setTimeout(() => {
            let num = 10;
            if(num>=11){
                resolve(num);
                //비동기 작업 성성
            }
            else{
                rejcet('this is an error');
                //비동기 작업 실패
            }
        },1000);
    });
//failerCallback 즉 then에 reject가 정의되어 있지 않을 경우, reject시에도 catch메서드를 호출함
//reject를 대신한다기 보다, 예외 상황에서 실행되는 코드
runCode.then((item)=>{
    console.log('success',item);
})
.catch((error) =>{
    console.log(error);
});

const promise = new Promise(
    (resolve, rejet)=>{
        console.log('start');
        resolve(1);
    });

promise.then((num) => {
    console.log('success1');
}).then(()=> {
    console.log('success2');
    throw new Error('error');//강제 에러 발생
}).then(() => {
    console.log('success3');
}).catch((error)=>{
    console.log('error.');
});
*/

const runCode = new Promise(
    //비동기 작업 수행
    (resolve, rejcet) => {
        setTimeout(() => {
            let num = 10;
            if(num>=9){
                resolve(num);
                //비동기 작업 성성
            }
            else{
                rejcet('this is an error');
                //비동기 작업 실패
            }
        },1000);
    });

runCode.then((item)=> {
    console.log('success',item);
    return 2;//return값이 다음 then의 인자로 넘겨짐!
})
.then((item) => {
    console.log('success2', item);
})
.then((item) => {
    throw Error('error');
    console.log('success3', item);
})
.finally(() => {//finally는 Promise가 resolve가 되는 reject가 되든 마지막에 해당 함수를 실행함
    console.log('finally');//에러 상황에는 먼저 코드가 종료가 되기 때문에
})
.catch((err) =>{
    console.log('error.');//finally가 먼저 실행된 후 catch가 실행됨.
});