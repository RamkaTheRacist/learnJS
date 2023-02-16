/*Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема:


Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.*/
'use strict';

let currentConnection = prompt("Your login?", "");
if (currentConnection === null) {
    alert("Canceled");
} else if (currentConnection === "Админ") {
    let password = prompt("Your password?", "");
    if(password === null){
        alert("Canceled");
    }else if(password === "Я главный"){
        alert("Hello");
    }else{
        alert("Incorrect password");
    }
} else {
    alert("I dont know you");
}