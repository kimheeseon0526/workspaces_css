//생성자
//첫글자 - 대문자


function Student(no, name = "소똥이", score = 100) {
//this : 미래에 생성될 객체의 주소값
    this.no = no;
    this.name = name;
    this.score = score;

}
const student = new Student(1, "새똥이", 90 );
console.log(student);   //Student { no: 1, name: '새똥이', score: 90 }
console.log(student.name);  //새똥이

const students = [];
students.push(student);
students.push(new Student(2,"개똥이", 99));
students.push(new Student(3));  //  Student { no: 3, name: '소똥이', score: 100 },
students.push(new Student());  //  Student { no: undefined, name: '소똥이', score: 100 }
students.push(new Student(4, undefined, 44));  // Student { no: 4, name: '소똥이', score: 44 }
console.log(students);




