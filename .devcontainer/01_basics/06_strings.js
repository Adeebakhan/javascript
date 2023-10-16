let projectName=new String('Mealy')
console.log(projectName)
const name="ADEEBA"
console.log(`Hey babe its me ${name.toLowerCase()}`)
// string methods
const str1="hey re how you?"
const str2="hey re how you too?"
function areEqualCaseInsensitive(str1,str2){
    return str1.toUpperCase()===str2.toUpperCase();
}
console.log(areEqualCaseInsensitive(str1,str2))
const a= new String('adeeba')//here string is an object that is a is a reference to string
const b=String('adeeba')//here string is primitive that is it assigns a value 
console.log(a)
console.log(b);
console.log(typeof a)
console.log(typeof b)
const sym=Symbol('adeeba')//converting symbol to string
// console.log(`${sym}`)
console.log(String(sym))


