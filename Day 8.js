//object destructuring
const band={
    bandname:"Rutuja",
    famousSong:"Perfect",
    year:1999
}
//const bandname=band.bandname
//const famousSong=band.famousSong
//console.log(bandname,famousSong)
//bandname="Queen"
//console.log(bandname,famousSong)
//This upper example was a long cut for object destructuring, now we will see the shortcut of it

const {bandname, famousSong, ...rest}=band
console.log(bandname,famousSong,rest)

const {bandname:var1, famousSong:var2}=band
console.log(var1,var2)
console.log("-------------------------")
//Object inside array
//very usefull in real world applications
const user=[
    {userid:1,fname:'Rutuja',age:22},
    {userid:2,fname:'Rutu',age:20},
    {userid:3,fname:'Rutuj',age:21}
]
//console.log(user)
 for(let a of user){
    console.log(a.fname)
 }
 console.log("-------------------------")
const [user1,user2,user3]=user
const [{userid: var3,userid}, ,{age:var4}]=user
console.log(var3)
console.log(var4)
console.log(user1,user2,user3)

console.log("-------------------------")
//Functions
console.log("Hello Rutuja!!!")
function song(){
    console.log("Hello Rutuja!!!")
}
song()

function sum()
{
    console.log(2+4)
}
sum()
//dry---> dont repeat your code
function sum1(num1,num2){
    return num1+num2
}
const returned=sum1(3,4)
console.log(returned)
//If we take 3 variables ani 2 parameters it will return NaN

function isEven(number){
    if(number%2==0){
        return true
    }
        return false
}
console.log(isEven(3))

//WAP to take input as string and give output its first character
function fchr(anystr){
    return anystr[0]
}
console.log(fchr("Rutu"))

//take input of array and target a number which gives output as index of target if target present in array
function find(array, target){
    for(let i = 0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
const myarray=[1,2,3,4,5]
const ans=find(myarray,8)
console.log(ans)

//function Expression
//we can create a function with another method too
const multi=function(){
    console.log("Hello")
}
multi()