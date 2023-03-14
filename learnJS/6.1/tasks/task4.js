// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
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
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?


function printList(list){
    if(list.next == null){
        console.log(list.value);
    }else{
        console.log(list.value);
        return printList(list.next);
    }
}

function printListV2(list){
    let tmp = list;
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next;
    }
}