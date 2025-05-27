function max() {
    console.log(arguments);
//Arguments 객체 > 배열처럼 사용되는 객체(유사배열)
//[Arguments] { '0': 30, '1': 40, '2': 10, '3': 20 }
// console.log(typeof arguments); //object
    var ret = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        if(ret < arguments[i]) {
            ret = arguments[i];
        }
    }
    return ret;
}
console.log(max(30, 40, 10, 20));


//선언은 되어있으나 호출은 안되기 때문에 undefined 출력됨
function test(a,b){
    console.log(a, b);
}
test(); //undefined

//숫자 하나를 입력받아 절대값 반환
var abs = function(a){
    return a > 0 ? a : -a;
};
//arrow funtion(람다식 문법)
abs = a =>  a > 0 ? a : -a;

//배열 생성
var arr = [3, 2, 1, 5, 4];
arr.sort((a, b) => b - a);
console.log(arr);
//[ 5, 4, 3, 2, 1 ]
//순환탐색을 하는 아이
arr.forEach (a => console.log(`내부의 값은 ${a}`));
// 내부의 값은 5
// 내부의 값은 4
// 내부의 값은 3
// 내부의 값은 2
// 내부의 값은 1
arr.filter(a => a % 2 == 1).map(a => "값은 " + a).forEach(a => console.log(a));
// 값은5
// 값은3
// 값은1

//scope 범위
//전역변수(global variable), 지역변수(local variable)

//filter와 map의 차이
//filter : 조건에 맞는 인자만 가져와서 새로운 배열로 반환(반환값 true or false)
//map : 요소를 순서대로 불러 그 함수의 반환값으로 새로운 배열 생성