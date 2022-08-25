const user = {
    age :10,
    name : 'Dave',
    details : {
        hobby : 'coding',
        major : 'japanese',
        get_hobby : function(){
            return this.hobby;
            //현재 객체의 요소를 리턴하기 위해서 this를 사용
        }//get_hobby함수를 화살표 함수로 나타낸다면 this사용 불가능
    }
};
//console.log(user.details.get_hobby());

//getter와 setter
const test = {
    age :10,
    name : 'Dave lee',
    get get_age(){//getter를 선언할땐 인자가 없어야함
        return this.age;
    },
    set set_age(value){//setter를 선언할땐 인자가 하나 있어야함
        this.age = value;
    }
}
console.log(test.get_age);//getter 호출 방법(함수 형식으로 선언했지만, 변수 형식으로 호출)
test.set_age = 20;//변수처럼 setter 사용
console.log(test.get_age);

function functest(age, name){
    this.age = age;
    this.name = name;

}
functest.prototype.message = function(){//prototype을 사용하여 method 추가
    return 'Hello';    
}

functest.prototype.hobby = 'coding'//prototype을 사용하여 프로퍼티 추가

const dave = new functest(10,'Dave');
console.log(dave);
console.log(dave.age, dave.name, dave.hobby);
console.log(dave.message());
console.log(functest.prototype);
console.log(lee.hobby);