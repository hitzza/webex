const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('100ms');
        resolve('100ms');
    });
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('500ms');
        resolve('500ms');
    });
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('1500ms');
        resolve('1500ms');
    });
});
//Promise의 all을 사용하면 동기화 차리할 Promise를 배열 형태로 묶어서 한번에 실행
//즉 여러 함수가 다 실행이 완료된 후에,then 구문을 실행함
Promise.all([promise1,promise2,promise3]).then(
    (data)=>{
        console.log(Array.isArray(data),data);
    });


//Promise의 race를 사용하면 가장 먼저 실행완료된 함수만 then 구문을 실행함
Promise.race([promise1,promise2,promise3]).then(
    (data)=>{
        console.log('race',data);
    });