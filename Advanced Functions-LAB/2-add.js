function solution(number){
 
 return function add(num1){
    return number+num1;
 }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
