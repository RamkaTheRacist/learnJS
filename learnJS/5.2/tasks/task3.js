/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

function readNumber(){
    while(true){
        let userNumber = prompt("Your number","");
        if(userNumber == "" ^ typeof userNumber == "object"){
            return null;
        }
        if(isFinite(userNumber) != true){
            return +userNumber;
        }
    }
}
alert(readNumber());