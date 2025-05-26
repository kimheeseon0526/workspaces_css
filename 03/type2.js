var o = {a:10};
console.log(o.b);
console.log(num);


var obj = 0 === 3;
if(obj) {
    console.log('참인 경우 출력');
}
else{
    console.log('거짓인 경우 출력');
}

//형변환
var num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);

// 숫자 > boolean
// 0 > false, 그 외이 숫자는 true
// boolean > 숫자
// true > 1 , false > 0

// number > String
//String > number ex "abcd"  ->NaN(Not of Number)

var str = "abcd";
str = Number(str);
console.log(str);
var n = NaN;
console.log(isNaN(str)); 
console.log(Number.MAX_VALUE);
console.log(0/0, 3/0);
console.log(isFinite(3));




