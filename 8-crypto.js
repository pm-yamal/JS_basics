// 1. Задача:
//      Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.
// 2. Шифратор пароля:
//      Функция принимает строку (пароль) для шифрования.
//      По заданному алгоритму происходит перестановка символов в строке.
//      Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
//      Важно: шифрование должно быть обратимым.
// 3. Проверка пароля:
//      Функция сравнивает зашифрованное слово с исходным паролем.
//      Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
//      В противном случае — false.

// Решение: разбить исх. строку на массив, переставить эл-ты массива, сшить массив обратно.
// 1.Ф-ия шифрования
function getEncryption(simpleStr) {
    const arrNew = [];
    const arrSplit = simpleStr.split('');
    for (let i = 0; i < arrSplit.length; i++) {
        arrNew.unshift(arrSplit[i]);
    }
    return arrNew.join('');
}
const result = getEncryption('password');
console.log(result);

// 2. Ф-ия дешифрования
function getDecryption(result, simpleStr) {
    const arrNew = [];
    const arrSplit = result.split('');
    for (let i = 0; i < result.length; i++) {
        arrNew.unshift(arrSplit[i]);
    }
    if (arrNew.join('') == simpleStr) {
        return true;
    }
    else {
        return false;
    }
}
console.log(getDecryption(result, 'password'));