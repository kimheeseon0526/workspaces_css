//scope : 변수에 접근할 수 있는 범위

// var num = 10;
// str = "새똥이";
function f() {
    //var num;
    // console.log(num);   
    num = 20; //할당 시점에 var 키워드가 없으면 전역위치에 선언
    console.log(num);    
}
f();
console.log(num);
console.log(str);

//지역의 위치에서 var, let 없이 선언 가능, 키워드 생략시 전역의 위치에 선언

//var키워드, 선언적 함수 공통점
//hoisting의 대상, 함수레벨 scope

for(var i = 0; i < 10; i++){
    console.log(i);
}
//i의 값은?

if(true){
    let test = 10;
}
console.log(test);
var str = "abcd";
var str = "가나다라";

// let str2 = "abcd";
// let str2 = "가나다라";