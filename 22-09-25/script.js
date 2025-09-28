// Найдите на странице все параграфы с классом border и добавьте для них сплошную красную рамку толщиной в 1px
// let borderParagraphs = document.querySelectorAll("p.border");
// for (const paragraph of borderParagraphs) 
//     paragraph.style.border = "1px solid red";


// getRandomColor функция, которая возвращает случайно сгенерированный цвет в фомрмате #001122
// Используя функцию getRandomColor добавьте для каждого параграфа рамку случайного цвета
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// let paragraphs = document.querySelectorAll("p");
// for (const paragraph of paragraphs)
//     paragraph.style.border = "1px solid " + getRandomColor();


// Найдите на странице все элементы li, которые находятся в ul с классом border 
// и добавьте для них сплошную красную рамку толщиной в 1px
// let lists = document.querySelectorAll("ul.border li");

// for(const listItem of lists)
//     listItem.style.border = "1px solid red";

// Для первого и последнего элемента li для всех ul на данной странице
// добавьте сплошную красную рамку толщиной в 1px
// let allLists = document.querySelectorAll("ul");
// for (const currentList of allLists){
//     let listElements = currentList.querySelectorAll("li")
//     listElements[0].style.border = "1px solid red";
//     listElements[listElements.length - 1].style.border = "1px solid red";
// }

// Поменяйте вызовы методов getElementById, getElementsByName, getElementsByTagName, getElementsByClassName 
//  на вызовы методов querySelector или querySelectorAll так, чтобы поведение сценария не изменилось.

// let paragraph = document.querySelector("#first");
// paragraph.style.border = "2px solid red";

// let radioButtons = document.querySelectorAll('[name="answer"]');
// for (const button of radioButtons) {
//     button.checked = !button.checked;
// }

// let listItems = document.querySelectorAll("li");
// for (const item of listItems) {
//     item.style.margin = "2px";
//     item.style.border = "2px solid green";
// }

// let lists = document.querySelectorAll(".my-list");
// for (const list of lists) {
//     list.style.border = "2px solid blue";
// }



