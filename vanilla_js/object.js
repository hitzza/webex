//js object ex
const emptyObject ={};//빈 객체 생성
emptyObject.name = "Dave";//빈 객체에 선언하는것으로도 생성 가능
emptyObject.age = 10;
emptyObject.get_data = function(){
    return 2+2;
};

console.log(emptyObject);


const user = {
    age : 20,
    name : "Dave",
    get_data: function(){//값으로 함수도 선언 가능
        return 1+2;
    }
};
console.log(typeof user,user);
console.log(user.age);
console.log(user.name);
user.age = 25;//const로 선언한건 재할당은 불가능 하지만, 프로퍼티의 값은 수정 가능
console.log(user.age);
console.log(user.get_data());

const userlog = {
    age : 10,
    name : 'Dave',
    details : {//객체 안에 또 다른 객체 선언 가능
        hobby : "coding",
        major : 'japanese',
        get_details: function(item) {
            return item*2;
        }
    }
}
console.log(userlog);
console.log(userlog.age,userlog.name);
console.log(userlog.details.hobby, userlog.details.major,userlog.details.get_details(2));//객체속 다른 객체 불러오기
