/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Calculator() {
    this.read = function () {
        this.firstNumber = +prompt("First number", "");
        this.secondNumber = +prompt("Second number", "");
    };
    this.sum = function () {
        return this.firstNumber + this.secondNumber;
    };
    this.mul = function () {
        return this.firstNumber * this.secondNumber;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );