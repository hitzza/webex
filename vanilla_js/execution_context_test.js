var a =1;//1.a 선언 후 할당

function outer() {
    function inner(){
        //4.a선언(값은 undefined)
        console.log('inner'+a);//5.inner undefined
        var a = 3;//6.a에 값 3할당
        //return을 안해주었기 때문에 현재 스코프에서만 a=3
    }
    inner();//3.inner함수 호출
    console.log('outer'+a);//7. outer1
}
outer();//2.outer 함수 호출
console.log('a'+a);//8.a1