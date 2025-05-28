const arr = [1, 2, 3, 4];
const obj = {a:1, b:2};
const map = new Map();
map.set("a", 1);
map.set("b", 2);

console.log(map);   //Map(2) { 'a' => 1, 'b' => 2 }
console.log(map.get("a"));  //a의 값
console.log(map.has("a"));  //가지고 있는지 여부 -> true

const keys = map.keys();
console.log(keys);  //[Map Iterator] { 'a', 'b' }  -> 즉, 키만 보여준다

for(let i of keys){
    console.log(i); //a, b
    
}

for(let i of map.values()){
    console.log(i); //1, 2
    
}

for(let i of map.entries()){
    console.log(i); //[ 'a', 1 ] [ 'b', 2 ]
    
}

//Map의 내부인터페이스 Entry



//자바에서는 iterable(반복) 인터페이스로 배열, 리스트, set 정의 -> 향상for문 가능
// for(let i of arr) {
//     console.log(i);
// }

//a, b라는 이름을 통해서 접근하기 때문에
// for(let i of obj){
//     console.log(i);
// }   //obj is not iterable