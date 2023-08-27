// 1- let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).
let x = 5
let y = 5
x *= y
console.log (x)


// 2 -create new variable 'let1' in lower case
let New3 = 'let1'
New3 = New3.toLocaleLowerCase() 
console.log (New3)


// 3 - Update value 'let1' to upper case.
New3 = New3.toUpperCase () 
console.log (New3)


// 4 - Create another variable with few words and contain 'let1'. use method replace to word 'BANG'
let New4 = 'let1 test 4'
New4 = New4.replace ('let1', 'BANG') 
console.log (New4)


// 5 - create comparison operator to log true, when x is NOT equal to y.

let XComp = 5
let YComp = 7
let logicOperNotEqual = XComp != YComp
console.log (logicOperNotEqual)



// 6 - create variable with using addition assignment (+=) for two numbers
let num1 = 5
let num2 = 5 
num1+=num2
console.log(num1)


// 7 - create variable that should be 'false' with using equality operator
let New7 = 6
let logicOperEqual = (x == 10)
console.log (logicOperEqual)
