
//js 데이터타입
// 숫자, 문자열, 논리 >> 기본자료형
//객체, 함수, undifined

var num = 20;
console.log(typeof num);

var obj = {a: 10, b:20};
var arr = [3,2,1, true, "가나다라"];
var fn = function () {};
console.log(typeof obj)
console.log(typeof arr)
console.log(typeof fn)
console.log(obj.a);
console.log(arr[3]);

var str = `여기는 ${obj.b} 문자열` + "\nhello";
console.log(str);

// ` (back tick)을 활용한 내부 참조 호출

