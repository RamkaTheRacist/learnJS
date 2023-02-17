/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

function getMaxSubSum(array) {
    let max = -1;
    let sum = 0;
    let tmpArray = [];
    for (const iterator of array) {
        sum += iterator;
        tmpArray.push(iterator);
        if (max < iterator) {
            max = iterator;
        }
    }
    while (true) {
        if (sum - tmpArray[tmpArray.length - 1] > sum) {
            sum -= tmpArray.pop();
        } else if (sum - tmpArray[0] > sum) {
            sum -= tmpArray.shift();
        } else {
            if (sum < max) {
                if (tmpArray[tmpArray.length - 1] == max) {
                    sum -= tmpArray.shift();

                } else {
                    sum -= tmpArray.pop();
                }
            } else {
                break;
            }

        }
    }
    return sum;
}