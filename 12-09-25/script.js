// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
// let minRange = 0
// let maxRange = 0
// let sum = 0

// do{
//     minRange = parseInt(prompt("Enter min range value:"))
//     maxRange = parseInt(prompt("Enter max range value:"))
// }while(isNaN(minRange) || isNaN(maxRange))

// if(minRange > maxRange){
//     let temp = minRange
//     minRange = maxRange
//     maxRange = temp
// }
// for(let i = minRange; i <= maxRange; i++)
//     sum += i

// alert(`Sum of numbers from ${minRange} to ${maxRange} is ${sum}`)

// Запросить 2 числа и найти только наибольший общий
// делитель.
// let num_1 = 0
// let num_2 = 0

// let gcd = 0
// do{
//     num_1 = parseInt(prompt("Enter first number: "))
//     num_2 = parseInt(prompt("Enter second number: "))
// }while(isNaN(num_1) || isNaN(num_2))

// num_1 = Math.abs(num_1)
// num_2 = Math.abs(num_2)


// for(let i = 1; i <= Math.min(num_1, num_2); i++ ){
//     if(num_1 % i == 0 && num_2 % i == 0)
//         gcd = i
// }
// alert(`GCD of ${num_1} and ${num_2} is ${gcd}`)

// Запросить у пользователя число и вывести все делители
// этого числа.
// let num = 0
// let divisors = ""
// do{
//     num = parseInt(prompt("Enter number: "))
// }while(isNaN(num))

// num = Math.abs(num)

// for(let i = 0; i <= num; i++){
//     if(num % i == 0)
//         divisors += `${i} | `
// }
// alert(divisors)

// Определить количество цифр в введенном числe.
// let num = 0
// let digits_count = 0
// do{
//     num = parseInt(prompt("Enter number to count digits: "))
// }while(isNaN(num))

// if (num === 0) 
//     digits_count = 1;
// else {
//     num = Math.abs(num);    

//     while (num > 0) {
//         num = Math.floor(num / 10); 
//         digits_count++;
//     }
// }

// alert(`Count of digits - ${digits_count}`);

// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей.При этом
// также посчитать, сколько четных и нечетных.Вывести
// статистику на экран.Учтите, что достаточно одной пере -
// менной(не 10) для ввода чисел пользователем.

// let positiveCount = 0
// let negativeCount = 0
// let zeroCount = 0
// let evenCount = 0
// let oddCount = 0

// let targetNum = 0

// for(let i = 1; i <= 10; i++){
//     do{
//         targetNum = parseInt(prompt("Enter number"))
//     } while (isNaN(targetNum))
//     if (targetNum > 0) positiveCount++
//     else if (targetNum < 0) negativeCount++
//     else zeroCount++

//     if (targetNum % 2 == 0) evenCount++
//     else oddCount++
// }
// alert(`Positive numbers: ${positiveCount} 
//     \nNegative numbers: ${negativeCount} 
//     \nZero numbers: ${zeroCount}
//     \nEven numbers: ${evenCount}
//     \nOdd numbers: ${oddCount}`)

// Зациклить калькулятор.Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет 
// ли он решить еще один пример.И так до тех пор, пока
// пользователь не откажется
// let num_1 = 0
// let num_2 = 0
// let action = ''

// while(true){
//     do{
//         num_1 = parseInt(prompt("Enter first number"))
//         num_2 = parseInt(prompt("Enter second number"))
//     }while(isNaN(num_1) || isNaN(num_2))
//     action = prompt("Enter action ( + | - | / | * )")
//     switch(action){
//         case '+':
//             alert(`${num_1} + ${num_2} = ${num_1 + num_2}`)
//             break
//         case '-':
//             alert(`${num_1} - ${num_2} = ${num_1 - num_2}`)
//             break
//         case '*':
//             alert(`${num_1} * ${num_2} = ${num_1 * num_2}`)
//             break
//         case '/':
//             if(num_2 == 0)
//                 alert("Can't divide by zero!")
//             else
//                 alert(`${num_1} / ${num_2} = ${num_1 / num_2}`)
//             break
//         default:
//             alert("No such action")
//             break 
//     }
//     if (!confirm("Calculate again?")) break
// }

// Запросить у пользователя число и на сколько цифр его
// сдвинуть.Сдвинуть цифры числа и вывести результат(если
// число 123456 сдвинуть на 2 цифры, то получится 345612).

// Для решения задания пользовался алгоритмом для смещения элементов массива с первого курса

// let num = 0
// let shiftLength = 0
// let digitCount = 0

// do {
//     num = parseInt(prompt("Enter number: "))
// } while (isNaN(num))

// do {
//     shiftLength = parseInt(prompt("Enter shift length: "))
// } while (isNaN(shiftLength))

// num = Math.abs(num)

// let bufferNum = num

// if (bufferNum === 0) digitCount = 1
// else {
//     while (bufferNum > 0) {
//         bufferNum = Math.floor(bufferNum / 10)
//         digitCount++
//     }
// }


// shiftLength = ((shiftLength % digitCount) + digitCount) % digitCount

// let divisor = Math.pow(10, digitCount - shiftLength)

// let leftPart = Math.floor(num / divisor)
// let rightPart = num % divisor
// let result = rightPart * Math.pow(10, shiftLength) + leftPart

// alert(`${num} shifted by ${shiftLength} = ${result}`)

// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день ?» и так до тех пор, пока
// пользователь нажимает OK.

// let dayOfTheWeek = 1
// while(true){
//     switch(dayOfTheWeek){
//         case 1:
//             alert("Monday")
//             break
//         case 2:
//             alert("Tuesday")
//             break
//         case 3:
//             alert("Wednesday")
//             break
//         case 4:
//             alert("Thursday")
//             break
//         case 5:
//             alert("Friday")
//             break
//         case 6:
//             alert("Saturday")
//             break
//         case 7:
//             alert("Sunday")
//             break
//     }
//     if(confirm("Continue?")){
//         if(dayOfTheWeek == 7) dayOfTheWeek = 1
//         else dayOfTheWeek++
//     }
//     else break
// }

// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10

// let multiplicationTable =  ``
// let equation = ``

// for (let i = 2; i <= 9; i++) {
//     multiplicationTable += `\n[ ${i} ]\n\n`

//     for (let j = 1; j <= 10; j++) {
//         let result = i * j
        
//         equation = `${i} * ${j}`
//         equation += " = " + result

//         multiplicationTable += equation + "\n"
//     }
// }
// alert(multiplicationTable)

// Игра "Угадай число"
let min = 0
let max = 100
let userChoice = ""
let N = 0
let gameState = true

alert("Think of a number")

while (true) {
    let N = Math.floor((min + max) / 2)

    do {
        userChoice = prompt(`Number is | > | < | == | than [ ${N} ]`)
    } while (userChoice !== ">" && userChoice !== "<" && userChoice !== "==")

    switch(userChoice){
        case "==":
            alert(`Your number was: [ ${N} ]`)
            gameState = false
            break
        case ">":
            min = N + 1
            alert(`Number is bigger than ${N}`)
            break
        case "<":
            max = N - 1
            alert(`Number is smaller than ${N}`)
            break
    }
    if (min > max) {
        alert("Invalid range")
        break
    }

    if(!gameState){
        if(!confirm("Play again?")) break
        else alert("Think of a number")
    }
}

