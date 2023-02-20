/*Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».*/

function count(object) {
    //let count = 0;
    // for (const item of Object.keys(object)) {
    //     count++;
    // }
    // return count;

    return Object.keys(object).length;
}

let user = {
    name: 'John',
    age: 30
};

console.log(count(user)); // 2