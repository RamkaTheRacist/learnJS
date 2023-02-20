/*У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

'use strict';

function topSalary(object) {
    let result = 0;
    let employerName = null;
    for (let [key, value] of Object.entries(object)) {
        if (value >= result) {
            result = value;
            employerName = key;
        }
    }
    return employerName;
}
