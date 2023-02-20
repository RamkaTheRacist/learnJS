/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
'use strict';

function getSecondsToday() {
    return new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
}

console.log(getSecondsToday());