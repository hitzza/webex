/*
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get_message(){//class 내에서 함수를 정의할 때 function을 쓰지 않음
        return 'Hello';
    }
}
const dave = new User('Dave', 30);
console.log(typeof dave, dave.name,dave.age, dave.get_message());
*/


//extends
/*
class Animal{
    constructor(name){
        this.name =name;
    }
    get_message(){
        return 'Hello';
    }
}

class User extends Animal{
    constructor(name, user){
        super(name);// 자식 클래스레서는 super()(부모 클래스의 constructor를 호출)를 constructor 안에서 호출 해야함
        this.user = user;
    }
    get_message(){//다형성(부모 클래스의 메서드명과 동일하지만 자식 클래스에서 해당 메서드를 덮어씌워 다른 동작을 할 수 있는 기능)도 지원됨
        return 'Hello im Dave';
    }
}

const dave = new User('Dave', 30);
console.log(dave.name, dave.user, dave.get_message());

*/

//자바스크립트는 class와 function 모두 object이기 때문에 prototype을 사용할 수 있고,
//클래스명.prototype.프로퍼티 = 프로퍼티 값으로도 클래스 외부에서 프로퍼티 추가 가능
//클래스 내부에서 선언한 프로퍼티임을 확인하기 위해 hasOwnProperty(프로퍼티명)을 사용할 수 있음
//클래스명.prototype을 사용해 prototype 확인도 가능
class Animal{
    constructor(name){
        this.name = name;
    }
    get_message(){
        return 'Hello';
    }
}
Animal.prototype.age = 10;

console.log(Animal.prototype);

const dave = new Animal('dave');
console.log(dave.hasOwnProperty('name'));//미리 선언한 프로퍼티이므로 true
console.log(dave.hasOwnProperty('age'));//프로토타압우로 추가한 프로퍼티이므로 flase
console.log(dave.name,dave.age);