// Написать функцию, которая принимает число и выводит
// таблицу умножения для этого числа.Вызовите функцию
// для всех чисел от 2 до 9

// function MultiplicationTable(targetNum){
//     multiplicationTable = ""
//     let equation = ""
//     multiplicationTable += `\n[ ${targetNum} ]\n\n`

//     for (let j = 1; j <= 10; j++) {
//         let result = targetNum * j
        
//         equation = `${targetNum} * ${j}`
//         equation += " = " + result

//         multiplicationTable += equation + "\n"
//         }   
//     alert(multiplicationTable)
// }

// let printTable = () => { for(let i = 2; i < 10; i++) MultiplicationTable(i) }
// printTable()

// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй.В функции исполь -
//     зовать только + - * /, оператор % не использовать.

// let num_1 = parseInt(prompt("Enter first number: "))
// let num_2 = parseInt(prompt("Enter second number: "))


// if(!isNaN(num_1) && !isNaN(num_2) && num_1 > 0 && num_2 > 0 && num_1 > num_2 && num_2 != 0){
//     let remainder = (num_1, num_2) => { return num_1 - Math.floor(num_1 / num_2) * num_2; }
//     alert(remainder(num_1, num_2))
// }
// else
//     alert("Invalid numbers to work with")

// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.

// function SumOfNumbers() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// alert(SumOfNumbers(4, 5, 1, 10, 4))

// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает большее из них.

// function FindMax(){
//     const MAX_LENGTH = 5
//     if (arguments.length > 5){
//         alert("To many numbers")
//         return 0
//     }
//     let max = 0
//     for(let i = 0; i < MAX_LENGTH; i++){
//         if(arguments[i] > max) max = arguments[i]
//     }
//     return max
// }
// alert(FindMax(4, 12, 34, 4, 5))


//Написать функцию, которая выводит все четные или не -
//     четные числа, в указанном пользователем диапазоне.Какие
// числа выводить, определяется третьим параметром типа
// bool(true – четные, false – нечетны

// function PrintOddOrEven(min_range, max_range, isEven){
//     let numbers = ""

//     if (isNaN(min_range) || isNaN(max_range)) {
//         return "Invalid ranges to work with"
        
//     }
//     if (min_range > max_range) {
//         let temp = min_range
//         min_range = max_range
//         max_range = temp
//     }
//     min_range = Math.abs(min_range)
//     max_range = Math.abs(max_range)

//     if(isEven){
//         for(let i = min_range; i <= max_range; i++)
//             if(i % 2 == 0) numbers += ` ${i} |`
//     }
//     else{
//         for (let i = min_range; i <= max_range; i++)
//             if (i % 2 != 0) numbers += ` ${i} |`
//     }
//     return numbers
// }
// alert(PrintOddOrEven(1, 25, true))

// Написать функцию, которая принимает дату(день, месяц,
//     год) и возвращает дату следующего дня в виде строки
// «дд.мм.гггг». Проверку на високосный год желательно
// написать отдельной функцией

// isLeapYear = (year) => { return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0); }

// function GetDaysInMonth(month, year) {
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if (month == 2 && isLeapYear(year)) return 29;

//     return daysInMonth[month - 1];
// }

// function GetNextDay(day, month, year) {

//     if (isNaN(day), isNaN(month), isNaN(year)) return "Invalid values to work with"
//     if (month < 1 || month > 12) return "Invalid month"
//     if (day < 1 || day > GetDaysInMonth(month, year)) return "Invalid day"
//     if (year < 1) return "Invalid year"

//     let nextDay = day;
//     let nextMonth = month;
//     let nextYear = year;


//     nextDay++;

//     if (nextDay > GetDaysInMonth(month, year)) {
//         nextDay = 1;
//         nextMonth++;
//         if (nextMonth > 12) {
//             nextMonth = 1;
//             nextYear++;
//         }
//     }

//     return `${nextDay}.${nextMonth}.${nextYear}`;
// }

// alert(GetNextDay(31 ,12 ,2009))
// alert(GetNextDay(34, 5, 2034))