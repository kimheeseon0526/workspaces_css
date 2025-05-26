//
const obj = new Object();   //객체 생성
obj.a = 10;

const arr = new Array();    //길이가 0인 빈 배열 생성
console.log(obj);
console.log(arr);

//List<Student> students;
//students.get(0).getNo();

//Javascript Object Notation
//-> const students = [{no:1}, {no:2}];
const students = [{no:1}, {no:2}];
console.log(students[1].no); // = students.get(0).getNo();

[
    {className : '우리반'

    },
    {
        no:1,
        name:"새똥이",
        score : {
            kor : 90,
            eng : 80
        }
    },
    {
        no:2,
        name:"개똥이"
    }

]

//객체 리터럴의 단점
[
    {no:1},
    {no:2, name:'개똥이'}
]
