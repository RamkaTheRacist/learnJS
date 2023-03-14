/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

function printNumbersV1(from, to) {
    let current = from;
    let timer = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timer);
        }
        current++;
    }, 1000)
}

function printNumbersV2(from, to) {
    let current = from;
    setTimeout(function run() {
        console.log(current);
        if (current < to) {
            setTimeout(run, 1000);
        }
        current++;

    }, 1000);
}

printNumbersV2(1, 5);
