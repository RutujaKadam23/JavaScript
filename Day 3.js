//if else condition
console.log("--------------------------")
let age1=12
if(age1>18){
    console.log("User Valid")
}else{
    console.log("User InValid")
}
console.log("--------------------------")
let nums=7457846
if(nums%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}

//Ternary operator
console.log("--------------------------")
let qw=13
let drink

if(qw>=5){
    drink="Coffee"
}else{
    drink="Tea"
}
console.log(drink)
//Instead of wring this whole code we will write a small code by using ternary operator
let drink1 = qw>=5 ? "Coffee" : "Tea"

//And OR Operator
console.log("--------------------------")
let name3="Rutuja"
let age3=12

if(name3[0] === "R" && age3>18){
    console.log("You are Above 18")
}else{
    console.log("You are not above 18")
}

if(name3[0] === "R" || age3>18){
    console.log("You are Above 18")
}else{
    console.log("You are not above 18")
}

//Nested if else
console.log("--------------------------")
let win=20
let guess= 44

if(guess===win){
    console.log("Right")
}else if(guess>3){
    if(guess<win){
    console.log("Too low")
}else if(guess<=44){
    console.log("Too high")
}
}else{
    console.log("Too high")
}
//Switch statement
console.log("--------------------------")
let day=7

switch(day){
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")  
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid Day")
}

//While loop
console.log("--------------------------")
let nump=0

while(nump<=3){
    console.log(nump)
    nump++
}
console.log(`Current value of i is ${nump}`)

let numk=10
let i=0
let total=0

while(i<=10){
    total=total+i
    i++
}
console.log(total)
//another method
let total1=(numk*(numk+1))/2
console.log(total1)

//For loop
console.log("--------------------------")
for(i=0;i<=10;i++){
    console.log(i)
}
for(i=0;i<=numk;i++){
   total1 = total1 + i
}
console.log(total1)

//Break and Continue Keyword
console.log("--------------------------")
for(let i=1;i<=10;i++)
{
    if(i===4){
        break
    }
    console.log(i)
}
console.log("Heyy!!")
for(let i=1;i<=7;i++)
{
    if(i===4){
        continue
    }
    console.log(i)
}
console.log("Heyy!!")

//Do While Loop
console.log("--------------------------")
let k= 10
do{
    console.log(k)
    k++
}while(k<9)
console.log("Value of i is",k)