/*let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10*/

let arr = [5, 2, 1, -10, 8];

arr.sort((greater, lesser) => lesser - greater);

console.log( arr ); // 8, 5, 2, 1, -10
