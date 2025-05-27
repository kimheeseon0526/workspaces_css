//2. 선언과 할당 차이
//var - 재선언, 재할당 가능
//let - 재할당만 가능
//const - 불가능

let obj = { score: 50 };

function update(o) {
  o.score = 100;
}

update(obj);
console.log(obj.score);

//생성자 함수
//객체 리터럴

// var a = 1;

// function test() {
//   console.log(a);
//   var a = 2;
// }
// test();

// greet();

// const greet = function() {
//   console.log("Hello");
// };

// const a = {
//   value: 10
// };

const b = a; //a is not defined
b.value = 99;

console.log(a.value);