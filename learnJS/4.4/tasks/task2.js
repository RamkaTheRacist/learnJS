/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let calculator = {
    firstNumber: 0,     //Необязательно
    secondNumber: 0,    //Необязательно
    read() {
        this.firstNumber = +prompt("First number", "");
        this.secondNumber = +prompt("Second number", "");
    },
    sum() {
        return this.firstNumber + this.secondNumber;
    },
    mul() {
        return this.firstNumber * this.secondNumber;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
