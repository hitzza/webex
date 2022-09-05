//비동기 함수를 동기식으로 처리해주는 Promise함수
//Promise함수 내의 비동기식 함수를 동기식으로 표현해 주는것
//new를 사용해 객체로 선언하고, 인자르(resulve(성공시),reject(실패시))를 선언
const runCode = new Promise(
    (resolve,reject) =>{
        setTimeout(()=>{
            let num = 10;
            if(num>9){
                resolve(num);
            }else{
                reject('error');
            }
        },1000);
    }
);

//then을 사용해서 결과값 출력(인자를 resolve,reject 2개를 받아야함)
//argument도 사용 가능
runCode.then((item)=>{
    console.log('success',item)
}, (err)=>{
    console.log(err);
}).then(()=>{
    console.log('이런식으로 then 뒤에 또 then을 또 사용할 경우 비동기식 코드가 동기식 코드 순서로 사용할 수 있음');
}, ()=>{
    console.log('error2');
});
//then의 인자를 하나만 사용할 경우 성공했을 때의 값만 출력
//이 경우 앞선 단계의 then이 reject값이면 뒤의 then도 실행하지 않음
console.log('동기 작동');