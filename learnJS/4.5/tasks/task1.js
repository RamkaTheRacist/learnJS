/*Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.*/

/*Да, возможно.

Если функция возвращает объект, то new вернёт его вместо this.

Таким образом, они могут, к примеру, возвращать один и тот же внешне определённый объект obj:

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true*/
