const of_data = ['Dave', 'Alex', 'David'];

for (let i of of_data){
    console.log(i);
}
//for of 로 배열 아이템 꺼내기 가능

const in_data = {
    name : 'Dave',
    age : 20,
    brand : 'fun-coding',
    get_message:function(){
        return 'Hello';
    }
}
for (let i in in_data){//for in으로 프로퍼티 이름(키)꺼내기 가능
    console.log(i);
}
for (let i in in_data){
    console.log(in_data[i]);//in을 이용해서 프로퍼티 이름(키)에 맞는 값 꺼내기
}
console.log(Object.entries(in_data));
//프로퍼티 키와 값으로 이루어진 각 프로퍼티 셋의 리스트, 즉[[키,값],[키,값],[키값]]으로 이루어진 배열 반환
console.log(Object.keys(in_data));
//프로퍼티 키 리스트, 즉 [키,키,키]로 이루어진 배열 반환(for in 과 비슷)
console.log(Object.values(in_data));
//프로퍼티 값 리스트, 즉 [값,값,값]로 이루어진 배열 반환
