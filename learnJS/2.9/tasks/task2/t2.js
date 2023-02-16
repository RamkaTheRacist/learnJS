/*Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»*/
'use strict';

// let answer = prompt("What`s offical name of JavaScript?", "");
// if(answer == "ECMAScript"){
//     alert("Right!");
// }else{
//     alert("Dont know? ECMAScript!");
// }

let answer = prompt("What`s offical name of JavaScript?", "");
let message = (answer == "ECMAScript") ? "Right!" : "Dont know? ECMAScript!";
alert(message);