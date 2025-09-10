// Запросить у пользователя его возраст и определить, кем он
// является: ребенком(0–2), подростком(12–18), взрослым
// (18_60) или пенсионером(60– ...).
// let age = parseInt(prompt("Enter your age: "))
// if (age > 0 && age < 2)
//     alert("You are a child")
// else if (age > 12 && age < 18)
//     alert("Ypu are a teenager")
// else if (age > 18 && age > 60)
//     alert("You are adult")
// else if (age > 60)
//     alert("You are old")
// else
//     alert("Your are someone else")

// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише(1–!,
// 2–@, 3–# и т.д).
// let num = parseInt(prompt("Enter your symbol number: "))

// switch(num){
//     case 1:
//         alert('!')
//         break
//     case 2:
//         alert('@')
//         break
//     case 3:
//         alert('#')
//         break
//     case 4:
//         alert('$')
//         break
//     case 5:
//         alert('%')
//         break
//     case 6:
//         alert('^')
//         break
//     case 7:
//         alert('&')
//         break
//     case 8:
//         alert('*')
//         break
//     case 9:
//         alert('(')
//         break
//     case 10:
//         alert(')')
//         break
//     default:
//         alert("Invalid number")
//         break
// }

// Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры
// let targetNum = 0
// while (true){
//     targetNum = parseInt(prompt("Enter three digits number(100 - 999): "))
//     if (targetNum >= 100 && targetNum <= 999 && !isNaN(targetNum))
//     {
//         let firstDigit = targetNum % 10
//         let secondDigit = parseInt(targetNum % 100 / 10)
//         let thirdDigit = parseInt(targetNum / 100)
//         if (firstDigit == secondDigit || firstDigit == thirdDigit || thirdDigit == secondDigit)
//             alert("Number has equal digits")
//         else
//             alert("No equal digits")
//         break
//     }
//     else
//         alert("Invalid number to check")
// }

// Запросить у пользователя год и проверить, високосный он
// или нет.Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.
// let year = parseInt(prompt("Enter year: "))
// if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
//     alert("Leap year")
// else
//     alert("Not a leap year")

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let number = 0
// let currentDigit = 0
// let reversedNum = 0
// let bufferNum = 0

// while(true){
//     number = parseInt(prompt("Enter 5-digits number: "))
//     if(number > 10000 && number < 99999 && !isNaN(number)){
//         bufferNum = number
//         while (number) {
//             currentDigit = number % 10
//             reversedNum = (reversedNum * 10) + currentDigit
//             number = parseInt(number / 10)
//         }  
//         bufferNum == reversedNum ? alert("Palindrome number") : alert("Not a palindrome nubmer")
//         break
//     }
//     else
//         alert("Invalid number to reverse")
// }

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумм
// const EUR_EX_RATE = 0.85
// const UAH_EX_RATE = 41.41
// const AZN_EX_RATE = 1.70

// let amountToConvert = 0
// let convertedAmount = 0
// let currency = ""

// while(true){
//     amountToConvert = parseFloat(prompt("Enter amount to convert (USD): "))
//     if(amountToConvert > 0){
//         currency = prompt("Enter target currency to convert to (EUR, UAH, AZN): ")
//         switch(currency.toUpperCase()){
//             case "EUR":
//                 convertedAmount = Math.round(amountToConvert * EUR_EX_RATE * 10) / 10
//                 alert(`${amountToConvert} $ --> ${convertedAmount} €`)
//                 break
//             case "UAH":
//                 convertedAmount = Math.round(amountToConvert * UAH_EX_RATE * 10) / 10
//                 alert(`${amountToConvert} $ --> ${convertedAmount} ₴;`)
//                 break
//             case "AZN":
//                 convertedAmount = Math.round(amountToConvert * AZN_EX_RATE * 10) / 10
//                 alert(`${amountToConvert} $ --> ${convertedAmount} ₼`)
//                 break
//             default:
//                 alert("Invalid currency!")
//                 break
//         }
//         if(!confirm("Convert again?"))
//             break
//     }
// }

// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3 %, от 300
// до 500 – 5 %, от 500 и выше – 7 %
// let purshaceSum = parseInt(prompt("Enter purchase sum (min: 200 $): "))
// if(purshaceSum < 200)
//     alert("Sum is too small")
// if (purshaceSum >= 200 && purshaceSum <= 300)
//     alert(`Sum to pay: ${purshaceSum - (purshaceSum * (3 / 100))} $`)
// else if (purshaceSum >= 300 && purshaceSum <= 500)
//     alert(`Sum to pay: ${purshaceSum - (purshaceSum * (5 / 100))} $`)
// else if (purshaceSum > 500)
//     alert(`Sum to pay: ${purshaceSum - (purshaceSum * (7 / 100))} $`)

// Запросить у пользователя длину окружности и периметр
// квадрата.Определить, может ли такая окружность поместиться в указанный квадрат.
// let l = parseInt(prompt("Enter length of the circle"))
// let p = parseInt(prompt("Enter perimeter of the square: "))
// let radius = 0
// let diameter = 0
// let sideLength = 0
// if(l > 0 && p > 0){
//     radius = l / (2 * Math.PI);
//     diameter = 2 * radius;
//     sideLength = p / 4;
//     if (diameter <= sideLength) 
//         alert("You can fit circle in the square");
//     else 
//         alert("You can't fit circle in the square");
// }
// else
//     alert("Invalid values")
// Задать пользователю 3 вопроса, в каждом вопросе по 3 врианта ответа.За каждый правильный ответ начисляется 2
// балла.После вопросов выведите пользователю количество
// набранных баллов.
// let answer = ""
// let points = 0
// while(true){
//     answer = prompt(`Who was the first President of the United States ?
// a) Abraham Lincoln  
// b) George Washington
// c) Thomas Jefferson`)
//     if(answer == 'b'){
//         alert("Correct!")
//         points += 2
//     }
//    else
//     alert("Wrong!")

//     answer = prompt(`What is the chemical symbol for water?
// a) H₂O 
// b) O₂
// c) CO₂`)
//     if (answer == 'a') {
//         alert("Correct!")
//         points += 2
//     }
//     else
//         alert("Wrong!")

//     answer = prompt(`Which continent is the Sahara Desert located on?
// a) Africa 
// b) Asia
// c) Australia`)
//     if (answer == 'a') {
//         alert("Correct!")
//         points += 2
//     }
//     else
//         alert("Wrong!")

//     alert(`Your points: ${points}`)

//     if(!confirm("Try again?"))
//         break    
// }

// Запросить дату(день, месяц, год) и вывести следующую
// за ней дату.Учтите возможность перехода на следующий
// месяц, год, а также високосный год.

let day = 0
let month = 0
let year = 0
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // без массива не знал как сделать

day = parseInt(prompt("Enter day: "))

month = parseInt(prompt("Enter month: "))
year = parseInt(prompt("Enter year: "))


if(isNaN(day) || isNaN(month) || isNaN(year))
    alert("Invalid data")

if(month < 0 || month > 12)
    alert("Invalid month")


if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) 
    daysInMonth[1] = 29; 


if (day < 1 || day > daysInMonth[month - 1]) 
    alert("Invalid day")

day++

if (day > daysInMonth[month - 1]) {
    day = 1;
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
}

alert(`${day}-${month}-${year}`)