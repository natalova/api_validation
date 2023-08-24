//зробити змінну з значенням "We are good"
let NewOne = 'We are good'

//створити 2 зміні зі значеннями ''Hello" і "World"
let NewTwo = 'Hello'
let NewThree = 'World'

//створити команду для виведення в консоль цих слів разом
console.log (NewTwo, NewThree)

//чи вірно оголошена перевірка типу даних - і якщо ні - то змінити на вірний варіан
let NewFour = 'value1'
console.log (typeof NewFour)

//чи вірно оголошений код для отримання значення іншої змінної
let NewFive = 'value2'
let NewSix = `hello ${NewFive}`
console.log (NewSix)