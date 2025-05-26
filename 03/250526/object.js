//객체

let obj = {
    name:"홍길동", 
    age:20,
    printOut : function(){

    }
}; //3개의 객체(이름,나이, 함수)
console.log(obj.name);

//객체 관련 연산자
//객체에 프로퍼티 추가
obj.tel = "010-1111-2222";  //객체 추가
console.log(obj); //총 4개 객체

//객체의 프로퍼티 제거 연산자 : delete
delete obj.age;
console.log(obj); //총 4개 객체

//객체 내의 프로퍼티 확인 연산자(존재의 여부) in
console.log("tel" in obj);  //true
console.log("age" in obj);  //false

//spread operator(전개 연산)
//distribute operator(분해 연산)
const obj1 = {"a":1, "b":2, "abc-def":10};
const str = "가나다라";
// const obj2 = {"a":obj1["a"],"b":obj1["b"], c:3}; //최종 결과 a:1, b:2, c:3
const obj2 = {...obj1, c:3};
console.log(obj2);
console.log(obj1["a"]); //1
console.log(obj1.a); //1
console.log(obj1["abc-def"]);   //10

function fn(p1, p2,...a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}
fn("값1", "값2", 10, 20, 30);



