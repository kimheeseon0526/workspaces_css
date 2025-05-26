//numver, string , boolean
//funtion, object, undifined

//함수를 반환하는 함수
function f(c){
    let l = 10;
    //선언식 함수
    // function inner(){
    //     return l + c
    // }

    //익명함수
    // let inner = function(){
    //     return l + c;
    // }

    //일회성함수
    return function(){
        return l + c;
    }
    return inner;
}

const ret = f(10);
console.log(ret);
//[Function: inner]
const result = ret();
console.log(result);    //20

f(20)();
console.log(f(20)());


function f3(c) {
    c();
}

f3(function(){
    console.log("callback");
});

const arr = [10,20,30,40,50];
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);



