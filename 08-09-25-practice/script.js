// Запросить у пользователя число и определить, оно поло -
// жительное, отрицательное или ноль.
// let num = parseInt(prompt("Enter target number: "))
// if(num > 0)
//     alert("Num is greater than zero")
// else if(num < 0)
//     alert("Num is less than zero")
// else
//     alert("Num is zero")

// Запросить у пользователя его возраст и проверить кор -
// ректность введенных данных(0–120 лет).
// let age = parseInt(prompt("Enter your age: "))
// if(age > 0 && age < 120)
//     alert("Your age is okay")
// else
//     alert("Something's wrong")

// Запросить у пользователя число и вывести его модуль
// (| 7 | = 7, | -7 | = 7).
// let num = parseInt(prompt("Enter target number: "))
// if(num < 0)
//     alert(num * -1)
// else
//     alert(num)

// Запросить у пользователя время(часы, минуты, секунды)
// и проверить корректность введенных данных
// let hours = parseInt(prompt("Enter hours: "))
// let minutes = parseInt(prompt("Enter minutes: "))
// let seconds = parseInt(prompt("Enter seconds: "))

// if(hours < 24 && hours > 0 && minutes < 60 && minutes > 0 && seconds < 60 && seconds > 0)
//     alert(`${hours}:${minutes}:${seconds}`)
// else
//     alert("Invalid time values")

// Запросить координаты точки(x, y) и определить номер
// четверти, в которую попала эта точка.Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат.
// let x = parseInt(prompt("Enter x value: "))
// let y = parseInt(prompt("Enter y value: "))

// if (x == 0 && y == 0) {
//     alert("Begginning of cords");
// } else if (x == 0) {
//     alert("Y");
// } else if (y == 0) {
//     alert("X");
// } else if (x > 0 && y > 0) {
//     alert("First half");
// } else if (x < 0 && y > 0) {
//     alert("Second half");
// } else if (x < 0 && y < 0) {
//     alert("Third half");
// } else if (x > 0 && y < 0) {
//     alert("Fourh half");
// }


// Запросить у пользователя номер месяца и вывести на экран
// его название.
// let monthNum = parseInt(prompt("Enter month number: "))

// switch(monthNum){
//     case 1:
//         alert("January")
//         break
//     case 2:
//         alert("February")
//         break
//     case 3:
//         alert("March")
//         break
//     case 4:
//         alert("April")
//         break
//     case 5:
//         alert("May")
//         break
//     case 6:
//         alert("June")
//         break
//     case 7:
//         alert("July")
//         break
//     case 8:
//         alert("August")
//         break
//     case 9:
//         alert("September")
//         break
//     case 10:
//         alert("October")
//         break
//     case 11:
//         alert("November")
//         break
//     case 12:
//         alert("December")
//         break
//     default: 
//         alert("Invalid month number")
//         break
// }

// Запросить 2 числа и вывести большее из них
// let num1 = parseInt(prompt("Enter first number: "))
// let num2 = parseInt(prompt("Enter first number: "))
// let maxNum = num1 > num2 ? num1 : num2
// alert(`Bigger number is ${maxNum}`)

// Запросить 1 число и проверить, оно кратно 5 или нет
// let num = parseInt(prompt("Enter target number: "))
// num % 5 == 0? alert("Even to 5") : alert("Not even to 5")

// Запросить у пользователя название планеты.Если поль -
// зователь ввел «Земля» или «земля», то вывести «Привет,
// землянин!», в остальных случаях вывести «Привет, ино -
// планетянин!
// let phrase = prompt("Enter your planet")
// phrase == "Earth" || phrase == "earth" ? alert("Hello, earthlings") : alert("Hello, aliens")
