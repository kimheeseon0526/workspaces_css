function factorial(n) {
    let result = 1;
    if( n == 0){
        return result;
    }else{
        return result = n * factorial(n-1);
    }
}
console.log(factorial(5));

//url
//프로토콜://도메인:포트/경로/파일?쿼리스트링#앵커
//http://localhost:5050/03-250526/test.html?color=#002345&name=새똥이
//http://localhost:5050/03-250526/test.html?color=&002345

let url = 'http://localhost:5050/03-250526/test.html?color=#002345&name=새똥이';
console.log(url);
console.log(encodeURI(url));
console.log(encodeURIComponent(url));

console.log(decodeURIComponent(encodeURIComponent(url)));


//http://localhost:5050?value=http://localhost:5050/03-250526/test.html?color=#002345&name=새똥이
//value 위의 값이 모두 쿼리스트링으로 이스케이프 문자 다 변환해줘야한다
//반복문 -> 무한루프
//재귀호출 -> 스택오버플로

//parseInt(숫자가 포함된 문자열) : 숫자 >> 정수만
//parseFloat(숫자가 포함된 문자열) : 숫자 >> 실수포함
//단 시작이 숫자여야된다!
//ex. "baa1234가나다" -> NaN

let str = "123.456가나다";
console.log(parseInt(str)); //123
console.log(parseFloat(str)); //123.456

str = "ff";
console.log(parseInt(str, 16)); //255

//ASCII 코드 변환 - fromCharCode
let s = String.fromCharCode(65,66); //AB
console.log(s);

console.log((s.charCodeAt(1))); //66



