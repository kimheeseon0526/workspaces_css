//생성자 함수만 사용했을 때의 문제점
//Student 프로퍼티 갯수
//학번, 이름, 국, 영, 수,   총점, 평균 -> 함수타입

//프로토타입을 통한 분리
//학번, 이름, 국, 영, 수
//추가적으로 메서드 두개 관리

function Student(no, name, kor, eng, mat){
        this.no = no;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
}
Student.prototype.total = function() {
    return this.kor + this.eng + this.mat;
}
Student.prototype.avg = function() {
    return this.total()/3;
}
Student.prototype.test = 10;
Student.test = 20;
//프로토 타입 : 함수를 통해 생성된 객체(new)의 공용 공간 (사전에 생성자함수 정의되어있어야함)
const s = new Student(1, "새똥이", 90, 90, 90);
console.log(s.total());
console.log(s.avg());
console.log(s.test);
console.log(new Student().test);


//size 를 확인하는게 없어서 프로토타입으로 만들고 호출하면 사용가능
const arr = [1, 2, 3, 4];
Array.prototype.size = function() {
    return this.length;
}
console.log(arr.size());

const num = 10;
console.log(num.toFixed());
