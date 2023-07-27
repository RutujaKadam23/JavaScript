//Intro to arrays
//Arrays are mutable
//reference types
//how to create arrays

//ordered collection of items

let num =[1,2,3,4,5,6,null,undefined,String]
let fruits = ["apple","mango","grapes"]
console.log(fruits)
//array indexing
console.log(fruits[1])
console.log(num)
fruits[2]="banana"
console.log(fruits) 
console.log(typeof fruits)
console.log(Array.isArray(fruits))

//array push pop
fruits.push("pineapple")
console.log(fruits)

let popped=fruits.pop()
console.log(fruits)
console.log("Pooped fruit is",popped)

//array unshift
fruits.unshift("banana")
fruits.unshift("myfruit")
console.log(fruits)

//array shift
let removed=fruits.shift("apple")
console.log(fruits)
console.log("Removed fruit is",removed)

