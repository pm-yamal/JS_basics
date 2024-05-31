// Задание:
// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта
// Пример работы функции:
// Примерно $1000 рублей к долларам вернет $30.
// Обработка ошибок:
// Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.
// Логика функции:
// В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
// Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
// Если курс конвертации для заданной пары валют отсутствует, возвращается null.
// Расширение функциональности:
// Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
// Протестируйте функцию с различными входными данными.

// Решение:
function getExchange(sumOfConversation, initialCurrency, targetCurrency) {
    let currencyEchange = 0; 
    if (initialCurrency == 'RUB' && targetCurrency == 'USD') {
        return currencyEchange = Math.round((sumOfConversation / 88.44)*100)/100;    
    }
    else if (initialCurrency == 'RUB' && targetCurrency == 'EUR') {
        return currencyEchange = Math.round((sumOfConversation / 96.24)*100)/100;    
    }
    else if (initialCurrency == 'RUB' && targetCurrency == 'GBP') {
        return currencyEchange = Math.round((sumOfConversation / 112.65)*100)/100;    
    }
    else if (initialCurrency == 'USD' && targetCurrency == 'EUR') {
        return currencyEchange = Math.round((sumOfConversation * 0.92251)*100)/100;    
    }
    else if (initialCurrency == 'USD' && targetCurrency == 'GBP') {
        return currencyEchange = Math.round((sumOfConversation * 0.78353)*100)/100;    
    }
    else if (initialCurrency == 'EUR' && targetCurrency == 'GBP') {
        return currencyEchange = Math.round((sumOfConversation * 0.849346)*100)/100;    
    }    
    else {
        return 'Конвертация данных пар валют не поддреживается';
    }
}
console.log(getExchange(1000, 'RUB', 'USD'));
console.log(getExchange(1000, 'RUB', 'EUR'));
console.log(getExchange(1000, "RUB", "GBP"));
console.log(getExchange(1000, "USD", "EUR"));
console.log(getExchange(1000, "USD", "GBP"));
console.log(getExchange(1000, "EUR", "GBP"));
console.log(getExchange(1000, "", ""));