//map : 타입변경목적 ★
const boubled = [1, 2, 3].map(v => v * 2);
console.log(boubled);

//filter ★
const evens = [1, 2, 3, 4].filter(v =>  v % 2 === 0);
console.log(evens);

//find
const firstEven = [1, 3, 4, 6, 8].find(v => v % 2 === 0);
console.log(firstEven);


//reduce(fn, 초기값) 엥...?
const sum = [1, 2, 3, 4].reduce((prev, cur) => prev + cur , 0);
console.log(sum);

//some, every >> boolean
console.log([1, 2, 3].some(v => v % 2 === 0)); //배열 요소의 일부가(하나라도) 짝수인지
console.log([1, 2, 3].every(v => v % 2 === 0)); //배열 요소의 전체가 짝수인지

//includes
console.log([1,2,3].includes(1));   //true
console.log([1,2,3].includes(4));   //false

const users = [
    {name:'새똥이', age: 14},
    {name:'개똥이', age: 24},
    {name:'소똥이', age: 34}
]

//20세 이상인 사람의 이름만 출력
console.log(users.filter(v => v.age >= 20).map(v => v.name));

const arr = [1, 2, 3];
const result = arr.forEach(v => v * 2);
console.log(result);

//이 배열을 가지고 짝수만 골라서 제곱으로 이루어진 배열을 반환
const numbers = [1, 2, 3, 4, 5, 6, 7];

// const number2 = numbers.filter(v => v % 2 === 0); //2, 4, 6
// console.log(number2.map(v => v * v));   //[ 4, 16, 36 ]
//  numbers.filter(v => v % 2 === 0).map(v => v * v);
console.log(numbers.filter(v => v % 2 === 0).map(v => v * v));


//cart에 들은 상품들의 총합계 계산 reduce
const cart = [
    {item : "감자", qty: 3, price : 1000},
    {item : "고구마", qty: 2, price : 1500},
    {item : "양파", qty: 5, price : 500},
];  //8500

const ret = cart.reduce( (prev, curr) => {
    console.log(prev, curr);
    prev + curr.qty * curr.price 
}, 0);

console.log(ret);

//특정 조건의 첫 요소 찾기(find)
const books = [
    {title: "JavaScript 기초", pages : 120},
    {title: "ES6 완벽 가이드", pages : 350},
    {title: "CSS 디자인", pages : 200},
    {title: "HTML5", pages : 400},
];
//300페이지가 넘는 책의 이름을 조회
// books.find(v => v > 300);
const books2 = books.find(v => v.pages > 300);
console.log(books2.title);

console.log(books.find(v => v.pages > 300).title);


//reduce 가장 고가의 상품 이름을 조회 >> 노트북
const product = [
    {name : "노트북", price : 1200000},
    {name : "키보드", price : 150000},
    {name : "마우스", price : 50000},
    {name : "모니터", price : 300000},
]

product.reduce((prev, curr) => prev.price < curr.price , 0 );
// console.log(product.reduce((prev, curr) =>  prev.price < curr.price ? curr.price ,0 ));

console.log(product.reduce((pre, cur) => {
    return pre < cur.price ? cur : pre
}, 0).name);

for(let i = 0; i < 10; i++){

}

//in 과 of의 차이
const obj = {a:1, b:2};
for(let i in obj){
    console.log([i]);
}

const arr3 = [10, 20, 30];
for(let i of arr3){
    console.log(i);
}

const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth() +1);
console.log(now.getDate());









 








