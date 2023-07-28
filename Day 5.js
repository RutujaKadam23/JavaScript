//Reference Type
let array1=["item1","item2"]
let array2=array1
console.log("array1",array1)
console.log("array2",array2)
console.log("--------------------------")
array1.push("item3")
console.log("After Pushing element into array1")
console.log("array1",array1)
console.log("array2",array2)
console.log("--------------------------")

//how to clone an array
let array3=["item1","item2"]
let array4=array3
console.log(array3===array4)
console.log("--------------------------")

//How to slice the array
let array5=array2.slice(0)
console.log("Slicing the array",array5)
console.log("--------------------------")
//How to concatenate two arrays
let array6=["a","b"]
let array7=["c","d"]
let arrmerge=array6.concat(array7)
console.log(arrmerge)

//Concatenating three arrays
let array8=["a","b"]
let array9=["c","d"]
let array10=["e","f"]
let arraymerge=array9.concat(array10,array8)
console.log(arraymerge)

//Another method to concate arrays
let merge=[].concat(array8,array9,array10,["aaa","bbb"])
let merge1=array10.concat(array8,array9,["aaa","bbb"])
let merge2=[].concat(array8,["aaa","bbb"])
console.log("Merging multiple arrays by another method1",merge)
console.log("Merging multiple arrays by another method2",merge1)
console.log("Merging multiple arrays by another method3",merge2)
console.log("--------------------------")

//spread operator
let array11=[...array1,"item2","item3"]
console.log(array11)
let array12=[...array1,...array2]
console.log(array12)
console.log("--------------------------")

//for loop in array
let cars=["BMW","Maruti","Suzuki","Toyota"]
console.log("Length of car array:",cars.length)
for(let i=0;i<cars.length;i++){
    console.log(cars[i].toUpperCase())
}
let cars1=[]
for(let i=0;i<cars.length;i++){
    cars1.push(cars[i].toUpperCase())
}
console.log("Pushed array",cars1)
console.log("--------------------------")

//use const for creating array
const pi=3.14;
console.log(pi)

const car2=["q","W","r"]
car2.push("t")
console.log(car2)
console.log("--------------------------")

//While Loop in array
const letters=["a","b","c","d"]
const letters1=[]
let i=0
while(i<letters.length){
    letters1.push(letters[i].toUpperCase())
    i++
}
console.log(letters1)
console.log("--------------------------")
//for of loop in array
const letters3=[]
for(let letter of letters){
   letters3.push(letters)
}
console.log(letters3)
console.log("--------------------------")

//For in loop
const letter2=[]
for(let index in letters){
    console.log(index)
    console.log(letters[index])
}

console.log("--------------------------")
//Array Destructuring
const myarr=["1","2","3"]
let myvar=myarr[0]
let myvar1=myarr[1]
console.log("Value of myvar",myvar)
console.log("Value of myvar1",myvar1)

//To make it easy we use array destructuring
const [myvar12,myvar13]=myarr
console.log("Value of myvar12",myvar12)
console.log("Value of myvar13",myvar13)

//We can skip index and store next value to previous array
const [myvar11, ,myvar14]=myarr
console.log("Value of myvar11",myvar11)
console.log("Value of myvar14",myvar14)

//how to craete a new array in an existing array
let myArray=["1333","24545","34545","43454"]
let[myArr1,myArr2, ...myNewArr]=myArray
console.log("Value of myArr1",myArr1)
console.log("Value of myArr2",myArr2)
console.log("Values stored in myNewArr:",myNewArr)