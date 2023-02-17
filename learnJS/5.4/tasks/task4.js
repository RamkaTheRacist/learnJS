/*Напишите функцию sumInput(), которая:

*Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
*Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
*Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
    let resultArray = [];
    let result = 0;
    while (true) {
        let userNumber = prompt("Your number", "");
        if (userNumber == "" || typeof userNumber == "object" || isFinite(userNumber) != true) {
            break;
        }
        resultArray.push(+userNumber);

    }
    for (const iterator of resultArray) {
        result += iterator;
    }
    return result;
}
alert(sumInput());