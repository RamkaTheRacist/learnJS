/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

'use strict';

function getSecondsToday() {
    let currentTime = new Date();
    let tomorrow = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1)
    let difference = tomorrow - currentTime;
    return Math.round(difference / 1000);
}

console.log(getSecondsToday());