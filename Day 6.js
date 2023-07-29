//objects---->reference types
//arrays are good but not sufficient
//objects are used to represent real world data
//objects store key value pair
//objects dont have index

//how to create objects
const person={name:"Rutu",age:12}
console.log(person)
console.log(typeof person)
console.log(person.name)
console.log(person.age)

const person1={
    name:"Rutuja",
    age:23,
    "person hobbies":["Singing","Travel"]
}
console.log(person1)

//

//How to access data from objects by bracket notation
console.log(person1["name"])//by bracket notation
console.log(person1.hobbies)//by dot notation

//how to add key value pairs to objects
person1.gender="Female" //by dot notation
console.log(person1)

//difference between dot notation and barcket notation
console.log(person1["person hobbies"])

//We can add spaces by giving name of the variable in a string format
const key="email"
person1[key]="abc@123@gmail.com"
console.log(person1)

//How to iterate objects
const person2={name:"Rutujak",age:12,Hobbies:["Dance","Playing","Sleeping"]}

//for in loop
//object.keys
for(let key in person1){
    console.log(person1[key])
}

for(let key in person1){
    console.log(`${key} : ${person1[key]}`)
    console.log(key,person1[key])
    console.log(key,":",person1[key])
    console.log("--------------------------")
}

console.log(typeof(Object.keys(person1))) //Displaying keys type of array
const val=Array.isArray((Object.keys(person1)))// Displaying boolean value foe array is true or not
console.log(val)
console.log("--------------------------")

//Different ways to play with objects
for(let key of Object.keys(person1)){
    console.log(person1[key])
}
console.log("--------------------------")
const key1="objkey1"
const key2="objkey2"

const value1="myvalue1"
const value2="myvalue2"

//Applying Computed properties to the keys
const obj={
    [key1]:value1,
    [key2]:value2
}
console.log(obj)

console.log("--------------------------")
const obj1={}
    obj1[key1]=value1,
    obj1[key2]=value2

console.log(obj1)
console.log("--------------------------")
//Spread Operator
const arr1=[1,2,3]
const arr2=[4,5,6]

const newarr=[...arr1,...arr2]
const newarr1=[...arr1,arr2]
const newarr2=[..."1234568775654"]
console.log(newarr)
console.log(newarr1)
console.log(newarr2)
console.log("--------------------------")
const object1={
    key1:"val1",
    key2:"val2"
}
const object2={
    key3:"val3",
    key4:"val4"
}
const newObject={...object1,...object2,key99:"val99"}
const newObject1={..."ab"}
console.log(object1)
console.log(newObject)
console.log(newObject1)
console.log("--------------------------")
