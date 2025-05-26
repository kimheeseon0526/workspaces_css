function add(){
    let n = 0;
    return function(){
        return ++n;
    }
}

//closure : 함수 호출 완료 이후에도 지역 변수가 잔존하는 현상
//최소 선행 조건 : 함수를 return 해야됨
const increase = add(); // increase type -> funtion
console.log(increase());    //1
console.log(increase());    //2
console.log(increase());    //3

const increase2 = add(); //n을 0으로 초기화
console.log(increase2());
console.log(increase2());
console.log(increase2());
