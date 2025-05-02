// Задача 4: Динамическое добавление элементов
// Цель:
//  Закрепить работу с DOM и событиями для добавления элементов.
// Условие:
//  Создайте страницу, где пользователь может:
// Вводить текст задачи в поле.
// Нажимать кнопку "Добавить задачу".
// Новая задача появляется в списке.
// Добавьте функционал для удаления задачи при нажатии на неё.
// Шаги выполнения:
// Создайте HTML с полем ввода, кнопкой и списком.
// Используйте addEventListener для добавления новой задачи.
// Реализуйте удаление задачи через событие click.
// Результат:
//  Пользователь может добавлять и удалять задачи.

const button = document.querySelector('#button');
button.addEventListener('click', function(){
    const input = document.querySelector('#input');
    const ul = document.querySelector('#ul');
    let newList = document.createElement('p');
    newList.textContent = input.value;
    ul.appendChild(newList);
    input.value = '';
    newList.addEventListener('click', function(){
        newList.remove();
    })
})