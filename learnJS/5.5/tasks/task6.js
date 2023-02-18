/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
1)Для этой задачи не нужны скобки или сложные выражения.
2)Числа и оператор разделены ровно одним пробелом.
3)Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
    this.method = {
        "+": (first, second) => (first + second),
        "-": (first, second) => (first - second),
    };

    this.calculate = function (str) {
        let tmpArray = str.split(" ");
        if (tmpArray.length == 3) {
            first = +tmpArray[0];
            second = +tmpArray[2];
            action = tmpArray[1];
            if (!this.method[action] || isNaN(first) || isNaN(second)) {
                return NaN;
            }
            return this.method[action](first, second);
        }
        return "Wrong input data";
    };

    this.addMethod = function (name, func) {
        this.method[name] = func;
    };
}
