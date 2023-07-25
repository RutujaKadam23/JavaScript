//template string
let age=23
let firstname="Rutuja"
let aboutme=`my name is ${firstname} and my age is ${age}`
console.log(aboutme)

//undefined
var first
console.log(typeof first)
first="Tanu"
console.log(typeof first,first)

//null  --- Error / bug
let name=null
console.log(typeof null)

//BigInt ---- Not compatible with another datatype to perform operation
let mynum = BigInt(123);
let mynum1 = 123n;
console.log(mynum + mynum1)
console.log(mynum.MAX_SAFE_INTEGER)

//Boolean and Comparison Operator
let num1=3
let num2=4
console.log(num1<=num2)

//== vs ===

// == checks the value but not the datatype
console.log(num1==num2)

// === checks the value as well as datatype
console.log(num1===num2) 
console.log(num1 !== num2) //Dont check datatype
console.log(num1 != num2) //Checks datatype
