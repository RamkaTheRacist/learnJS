/*Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.*/

'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListV1(list) {
    if (list.next) {
        printListV1(list.next);
    }
    console.log(list.value);
}

function printListV2(list) {
    let array = [];
    let tmp = list;

    while (tmp) {
        array.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}