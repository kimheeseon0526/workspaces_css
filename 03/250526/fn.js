//funtion
// console.log(min(3,4));   // == var min : 현재 변수로만 선언되고 함수로 할당되지 않음
// console.log(min);


// 1.선언적 함수
// 함수 자체 이름 존재
function max(a, b) {
    return a > b ? a : b;
}

// 2. 익명 함수(변수 먼저 선언)
// 이름 없이 바로 파라미터 선언, 변수에 함수 데이터를 저장
var min = function(a, b){
    return a > b ? a : b;
}

// 선언적 함수로 두 수의 곱을 반환하는 함수 정의 mul
function mul(a, b){
    return a * b;
}

// 익명 함수로 두 수의 차이를 반환하는 함수 정의 sub(반드시 양수로)
var sub = function(a, b){
    return a > b ? (a - b) : - (a - b); 
}
console.log(sub(10, 6));

var add = function(a, b){
    //타입 숫자로 매칭
    if(!(typeof a ==="number" && typeof b === "number")) return NaN;
    return a + b;
}

//hoist : var로 선언한 변수, 선언적 함수는 끌어올려짐
//var로 선언한 변수는 중복 선언 가능
// console.log(num); //undifined
var num = 10;
var num = 20; 
console.log(num); // 20

// 함수 내에서 선언한 변수 ? 지역 변수
// 익명함수 === 함수리터럴
// {} : object literal 객체 리터럴
// funtion() {} :  funtion literal
// [] : array literal
console.log("abcd".substring(1,3)); //bc
console.log([10, 20, 30][1]); //20
console.log({a:10, b:20}.a);

//IIFE - 일회성 함수
//선언과 동시에 함수 실행되고, 함수명이 없어서 재호출 불가능
//실행문 () (넣어줄 값)
(function(a) {console.log('파라미터의 값 : ' + a)}) (30);

//javascript에서 funtion은 type이다★★★★★★

obj = {no:1, name:"새똥이",score:80, getScore : function(){
    return this.score;
}};
console.log(obj); //{ no: 1, name: '새똥이', score: 80, getScore: [Function: getScore] }
console.log(obj.score); //80
console.log(obj.getScore()); //80

//3개의 값 중 최대값 구하기
// 1번- if문 사용
function max2(a, b, c){
    if(a > b && a > c){ //a가 최대값일 때
        return a;
    }else { //a가 최대값이 아닐 때
        if(b > c){  //b가 최대값
            return b;
        }
        else {  //c가 최대값
            return c;
        }
    }
}
// 2번 - 함수 사용
function max3(a, b, c){
    return max(max(a, b),c);
}
console.log(max2(3, 4, 5));

function max4(a, b, c){
    console.log(arguments);
}

max4(10, 20, 30); // [Arguments] { '0': 10, '1': 20, '2': 30 }









