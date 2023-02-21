export function convertStringFirstLetterUpOtherLow(string) {   //Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”

    if (!string) {
        return string;
    }
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export function convertStringWithRightSpaces(string) {         //Преобразование строки с целью правильно расстановки пробелов.             
    if (!string) {
        return string;
    }
    return string.replace(/(\s{2})|(\s(?=\p{P}))/gu, "").replace(/(\p{P}(?=\S))/gui, '$1 ');
}

export function showCountOfWords(string) {                               //Подcчитывающие кол-во слов в строке   //Если в строке есть числа и прочий мусор     
    if(!string){
        return -1;
    }
    let result = 0;
    let tmpArray = string.replace(/(\p{P})|(\d+)|([+])/gu, " ").split(" ");
    for (const key of tmpArray) {
        if (key == "") {
            continue;
        }
        result++;
    }
    return result;
}

// export function showCountOfWords(string) {                                 //Подcчитывающие кол-во слов в строке   //Если в строке только слова и правильная пунктуация
//     let tmpArray = string.split(" ");
//     return tmpArray.length;
// }

export function showCountOfUniqueWords(string) {                         //Подсчитывающий, уникальные слова
    let resultObject = {};
    let array = string.replace(/(\p{P})|(\d+)|([-+/*]+)/gu, "").toLowerCase().split(" ");
    for (const item of array) {
        if (item == "") {
            continue;
        }
        if (!resultObject[item]) {
            resultObject[item] = 1;
        } else {
            resultObject[item] += 1;
        }
    }
    return resultObject;                         //Не отсортированный объект, в котором просто лежат слова, как "ключи" и количество раз сколько встретилось, как значения.
    // return Object.entries(resultObject).sort((a,b) => b[1] - a[1]);          //Отсортированный массив, в котором лежат [word, times]
}