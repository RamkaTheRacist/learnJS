/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};*/

'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let tmp = JSON.parse(JSON.stringify(user));