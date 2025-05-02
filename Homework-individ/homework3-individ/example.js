// Часть 2: Продвинутый уровень (по желанию)

// Задача 3: Калькулятор на событиях
// Цель:
//  Научиться использовать события для выполнения вычислений.
// Условие:
//  Создайте страницу с калькулятором, содержащую:
// Два поля ввода для чисел.
// Выпадающий список (select) с операциями: сложение, вычитание, умножение, деление.
// Кнопку "Вычислить".
// Блок для отображения результата.
// При нажатии кнопки результат вычислений должен появляться в блоке.
// Шаги выполнения:
// Создайте HTML с двумя полями, выпадающим списком и кнопкой.
// Используйте событие click для обработки нажатия кнопки.
// Получите значения полей и выберите операцию из списка.
// Результат:
//  Калькулятор выводит результат вычислений.

const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const button = document.getElementById('button');
const resultAll = document.getElementById('result');
button.addEventListener('click', function() {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    let result;
    if(number1.value.trim() === '' || number2.value.trim() === ''){
        result = 'Заполните поля';
    }
    switch (operation.value) {
        case 'сложение':
            result = num1 + num2;
            break;
        case 'вычитание':
            result = num1 - num2;
            break;
        case 'умножение':
            result = num1 * num2;
            break;
        case 'деление':
            if (num2 === 0) {
                result = 'Ошибка: деление на ноль';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Неизвестная операция';
    }
    resultAll.textContent = result;
});

