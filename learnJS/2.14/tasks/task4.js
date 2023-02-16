/*Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

Запустить демо

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/
function pow(number, degree){
    if(degree <= 0){
        return "degree should be more than 1";
    }
    return number ** degree;
}

let number = +prompt("Write number", "");
let degree = +prompt("Write degree","");
alert(pow(number, degree));

