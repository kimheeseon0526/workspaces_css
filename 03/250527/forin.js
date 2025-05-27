const obj = {a:10, b:20, c:30};
obj.d = 40;
obj["e"] = 50;
// obj[str] = 60;

console.log(obj.toString());

for(let i in obj){
    console.log(i, obj[i]);
}
//연관배열

//클래스

class Addr{
    #no;

    constructor(no, name, desc){
        this.no = no;
        this.name = name;
        this.desc = desc;
    }
    print(){
        console.log(this.no, this.name, this.desc);
        return "반환 테스트";
    }
    //get, set
    get no() {//getter method
        return this.#no;
    }
    set no(no) {
        this.#no = no;
    }
}

const addr = new Addr(1, "새똥이", "부천시");
console.log(addr);
console.log(addr.print());
addr.no = 10;
console.log(addr.no);
console.log(addr);

//생성자함수 통해
function Card(kind, number) {
    let k = kind; //이름 숨기기

    this.getKind = function(){
        return this.k;
    }
    this.setKind = function() {
        this.k = kind;
    }
}

for(let i in addr){
    console.log(i);
}
