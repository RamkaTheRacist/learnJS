/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650*/
'use strict';

function sumSalaries(object) {
    let result = 0;
    for (const item of Object.values(object)) {
        result += item;
    }
    return result;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(sumSalaries(salaries)); 