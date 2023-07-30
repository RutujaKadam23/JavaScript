//Week End Challenges 

//#1: Print numbers from 1 to 10
for(let i = 1; i <= 10; i++)
{
    println(i);
}

//#2: Print the odd numbers less than 100
for(let i = 1; i <= 100; i += 2)
{
    println(i);
}

//#3: Print the multiplication table with 7
for(let i = 1; i <= 10; i++)
{
    let row = "7 * " + i + " = " + 7 * i;
    println(row);
}

//#4: Print all the multiplication tables with numbers from 1 to 10
for(let i = 1; i <= 10; i++)
{
    printTable(i);
    println("");
}

function printTable(n)
{
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        println(row);
    }
}

//#5: Calculate the sum of numbers from 1 to 10
let sum = 0;

for(let i = 1; i <= 10; i++)
{
    sum += i;
}

println(sum);