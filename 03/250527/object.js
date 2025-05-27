//내장객체

//Number
const num1 = 10;
const num2 = new Number(20);

console.log(num1, num2); //10 [Number: 20]
console.log(num1 + num2); //30
console.log(typeof num1, typeof num2);//number object

console.log(num1.toFixed(3)); //10.000 , 소수점 세자리까지 표현
console.log(num2.toFixed(2)); //20.00 , 소수점 두자리까지 표현

//String
const str1 = "문자열";
const str2 = new String("문자열2");
console.log(str1, str2); //문자열 [String: '문자열2']
console.log(str1 + str2); //문자열문자열2

//String 관련 객체 프로퍼티
//프로퍼티 : 메서드, 필드 다 포함해서 부른다
console.log(str1.length); //3
for(let i = 0; i < str1.length; i++){
    console.log(str1[i], str1.charAt(i));
}
//includes(문자열) : 문자열 포함이면 true, 아니면 false
str1.includes("a");

const str3 = "abcd1234abcd";
console.log(str3.substring(3,5)); //d1(3 이상 5 미만)
console.log(str3.substr(3,5)); //d1234
console.log(str3.slice(3,5)); //d1

//정규 표현식 - test() , match()
//1.생성자를 통해 호출
const reg1 = new RegExp("[A-Z]");
const reg2 = /[A-Z]/; //RegExp의 literal

console.log(reg1, reg2);
 const arr1 = [1,2,3,4];
 const arr2 = new Array(1,2,3,4);

//정규 표현식 객체 플래그
// i : 대소문자 구분없이 비교
// g : 문자열 전체
// m : 여러행

console.log(/[A-Z]/.test("abcdABCD")); //true
console.log(/[A-Z]/.test("abcd1324")); //false

console.log("abcdefav".replace(/a/,"1")); //1bcdefav
console.log("abcdefav".replace(/a/g,"1")); //1bcdef1v g가 a 전체를 다 바꿔줌

console.log("abcdefabcdABCD".replace(/a/gi,"1")); //1bcdef1bcd1BCD  대소문자 상관없이 바꿈

// [].sort();
// = Arrays.sort([]);






//Boolean
