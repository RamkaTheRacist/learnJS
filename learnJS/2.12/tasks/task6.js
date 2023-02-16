/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/
'use strict';

// while(true){
//     let numberFromUser = prompt("Write number greater than 100","");
//     if(numberFromUser > 100 || numberFromUser === null){
//         break;
//     }
// }

let numberFromUser;
do {
    numberFromUser = prompt("Write number greater than 100","");
} while (numberFromUser < 100 && numberFromUser != null);