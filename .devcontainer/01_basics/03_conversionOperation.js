let score="33abc"
console.log(score);
console.log(typeof score)
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)
// "33"=>33
// "33abc"=>NaN
// true=>1;false=>0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=>true;0=>false
// ""=>false; "adeeba"=>true
let number=33
let stringNumber=String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

//operations
let x=8
let y=x++ //postfix increment
console.log(x);
console.log(y);
let a=9
let b=++a //prefix increment
console.log(a);
console.log(b);
let p=90
let q=--p //prefix decrement
console.log(p);
console.log(q);
let r=100
let s=r-- // postfix decrement
console.log(r);
console.log(s);