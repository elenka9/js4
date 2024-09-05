//Функции, function expression и function declaration
function greet(name){
    console.log("Привет, "+ name +"!")
}
greet("[Имя]")

const multiply = function(a,b){
    return a*b
}
console.log(multiply(3,5))

function isEven(count){
    if (count%2 === 0) {
        console.log(true)
        }
    else {console.log(false)}
}
isEven(5)
isEven(6)

//Стрелочные функции

const add = (c,d)=>c+d
console.log(add(100,5))

const square = (g)=>g*g
console.log(square(9))

let sayHello = (name1)=>{
    console.log("Привет, " + name1 + "!")
}
sayHello("[Имя]")

//Рекурсия
function factorial(n){ // 5*4*3*2*1
    if (n === 0) //пропускаем условие пока не будет верно
        return 1 //base line
    return n*factorial(n-1) //5*вызываем функцию факториал (5-1)*4 *...(1-1)
}
console.log(factorial(5))

function fibonacci(n){
    if (n <=1 ) 
        return n  // тут не понимаю логику
    return fibonacci(n-1) + fibonacci(n-2) //     
     
}
console.log(fibonacci(6)) // выводит 6 число в ряду фибоначчи

function sum1(N)  {
    if (N == 1 ) 
        return 1 // base case завершает рекурсию
    return N + sum1(N-1) // 10+/выполняется функция 10-1/ выполнила и вернула 9 + ...+2 Т.е. идет обратный отчет от 10?
}
console.log(sum1(10))

//область видимости/замыкание
function createCounter(){
    let count=0
    return function(){
        count++
        return count
    }
}
const counter = createCounter()
console.log(counter())

//function createSecret() {
//     let secret = "кодовое слово"
//     return function(){
//         console.log(secret)
//     }

// }  это не поняла как сделать

function createCounterWithInitial(initial){
    let number=initial 
    return function(){
        number++
        return number
    }
}
let numberWithInitial = createCounterWithInitial(99)
console.log(numberWithInitial())
console.log(numberWithInitial())
console.log(numberWithInitial())

