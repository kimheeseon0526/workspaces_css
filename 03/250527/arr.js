let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.length);
console.log((arr[1]));
console.log(arr.slice(2,4));
console.log(arr.join("-"));
console.log(arr.concat(["가", "나", "다"]));

//배열의 값 추가
arr.push(1);
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.splice(1,0,10);
console.log(arr);

arr.splice(2,1);
console.log(arr);

arr.splice(0,1,20, 35, 45);
console.log(arr);

arr.reverse();
console.log(arr);
arr.sort((a ,b) => b -a);
console.log(arr);

//forEach, map, filter, find, some, every, reverse, includes, findIndex

arr.forEach(function(a){
    console.log(a);
});

arr.forEach((a) => {console.log(a);
})

arr.forEach( a => console.log(a))
arr.forEach(console.log)









