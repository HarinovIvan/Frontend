// Практика B. Сложная манипуляция DOM
// Описание задачи:
// Вам нужно выполнить несколько изменений на странице с использованием методов DOM. Эта задача будет включать манипуляции с элементами, создание новых узлов, а также работу с дочерними и соседними элементами.
// Шаги выполнения:
// Изменить стиль заголовка.
//  Найдите элемент с id main-header. Измените его стиль:
// Поменяйте цвет текста на зелёный.
// Установите размер шрифта на 36px.
// Добавьте отступ снизу (marginBottom: '20px').

// Изменить текст первого параграфа.
//  Найдите первый параграф на странице с помощью метода getElementsByTagName. Измените его текст с помощью свойства textContent на "Это новый текст параграфа!".

// Удалить последний элемент списка.
//  Используя метод getElementById, найдите список с id list. Удалите последний элемент списка с помощью метода removeChild.

// Добавить новый элемент в начало списка.
//  Создайте новый элемент списка <li>, добавьте его в начало списка с id list. Текст элемента должен быть "Новый первый элемент".

// Вставить новый элемент после второго элемента списка.
//  Найдите второй элемент в списке с классом list-item. Используя методы nextElementSibling и parentElement, вставьте новый элемент списка после второго элемента с текстом "Новый второй элемент".

//b

let htmlTitle = document.querySelector('#main-header');
htmlTitle.classList.add('main-header-new');

let htmlElem = document.getElementsByTagName('p')[0];
htmlElem.textContent = 'Это новый текст параграфа!';

let htmlElemLast = document.getElementById('list');
htmlElemLast.removeChild(htmlElemLast.lastElementChild);

let htmlElemLi = document.createElement('li');
htmlElemLi.classList.add('list-item');
htmlElemLi.textContent = 'Новый первый элемент';
htmlElemLast.prepend(htmlElemLi);


let htmlTwoElemLiList = document.getElementsByTagName('li')[1];
let htmlTwoElemLi = document.createElement('li');
htmlTwoElemLi.classList.add('list-item');
htmlTwoElemLi.textContent = 'Новый второй элемент';
htmlTwoElemLiList.parentElement.insertBefore(htmlTwoElemLi, htmlTwoElemLiList.nextElementSibling);