// Реализовать простейший вариант теста, поочередно выдавая пользователю вопросы, 
// требующие односложных ответов("Да" и "Нет").После прохождения теста вывести результат.
// Вопросы и оценки за каждый вопрос хранить В сценарии в виде массивов.
// function PlayTest(){
//     let questions = ["Is the sky blue?",
//         "Do fish fly naturally?",
//         "Is water wet?",
//         "Can humans breathe underwater without equipment?",
//         "Is 2 + 2 equal to 4?"];

//     let answers = ["yes", "no", "yes", "no", "yes"];
//     let points = [10, 4, 5, 7, 1];
//     let total_points = 0;
//     let question_number = 0;
//     let user_answer = "";

//     while (question_number < questions.length) {
//         user_answer = prompt(questions[question_number]);
//         if (user_answer.toLowerCase() === answers[question_number]) {
//             total_points += points[question_number];
//             alert(`Correct, you earned ${points[question_number]} points`);
//         } else {
//             alert("Incorrect!");
//         }
//         question_number++;
//     }

//     alert(`Test completed! \nTotal score: ${total_points} points`);
// }
// PlayTest()

// От пользователя требуется ввести ФИО.Необходимо, 
// чтобы сценарий проверил ввод пользователя на наличие недопустимых символов.
// Недопустимыми символами считать любые символы, кроме букв, пробелов и точек.
// Эти символы можно задать в сценарии в виде строки.
// function CheckName(fullname){
//     let detected_symbols = []
//     for (let char of fullname) {
//         if (invalid_symbols.includes(char) && !detected_symbols.includes(char))
//             detected_symbols.push(char);
//     }
//     alert(`Detected invalid symbols: ${detected_symbols.join(" | ")}`)
// }

// const invalid_symbols = [
//     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  
//     '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',  
//     '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|',
// ];

// let fullname = prompt("Enter your full name: ")
// CheckName(fullname)

// Разделить на составные части введенный http - адрес.
// Например, адрес "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2" делится 
let full_link = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2"

let protocol = full_link.slice(0, full_link.indexOf(':'));

let host_first_index = full_link.indexOf('//') + 2;
let host_last_index = full_link.indexOf('/', host_first_index);
let host = full_link.slice(host_first_index, host_last_index);

let path_fist_index = host_last_index;
let path_last_index = full_link.indexOf('?');
let path = full_link.slice(path_fist_index, path_last_index);

let filename = path.split('/').pop();

let request_line = full_link.slice(full_link.indexOf('?') + 1, full_link.length);

alert(`Protocolo: ${protocol}
    \nHost: ${host}
    \nPath: ${path}
    \nFilename: ${filename}
    \n Requaest line: ${request_line}
    \nFULL LINK: ${full_link}`)

