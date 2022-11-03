/* 데이터 형태

var member = {
    Jan : {item : {title: "js북", amount : 100}, point : [10,20,30]},
    Feb : {item : {title: "js북", amount : 200}, point : [40,50,60]}
}
재귀 함수로 데이터를 출력하세요.
    - 오브젝트이면 프로퍼티 이름(title,amount)과 값을 출력하고,
    - 배열이면 값([10,20,30])을 출력하고 값을 누적하세요
재귀 호출이 끝나면 누적한 값을 출력하세요.
*/
var member = {
    Jan : {
            item : {
                    title: "js북",
                    amount : 100},
            point : [10,20,30]
        },
    Feb : {
            item : {
                    title: "js북",
                    amount : 200},
            point : [40,50,60]
        }
};
/*
function sumMember(member){
    for(var type in member){
        typeof member[type] === 'object'
        ? console.log(type + ':' + member[type])
        : sumMember(member[type])
        
         
    }
}*/
var result;

function getReduceElements(arr){
    return  arr.reduce((a,b) => (a+b)); 
}
function ifArray(member){
    if(Array.isArray(member)){
        console.log(member);
        result = getReduceElements(member);
        console.log(result);
    }else{
        show(member);
    }
    
}

function show(member){
    for(var type in member){
        typeof member[type] === 'object'
        ? ifArray(member[type])
        : console.log(type + ':' + member[type])//name : value
    }
}
show(member);