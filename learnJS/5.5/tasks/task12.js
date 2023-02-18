/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  /* ваш код /
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
*/
'use strict';

function unique(array) {
    let result = [array[0]];
    for (let index = 0; index < array.length; index++) {
        if(!result.includes(array[index])){
            result.push(array[index]);
        }
    }
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));