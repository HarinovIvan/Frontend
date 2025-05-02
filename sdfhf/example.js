// Практика С. Валидация формы заказа товара
// Цель: Создать форму заказа товара и реализовать валидацию полей с проверкой на пустоту, длину имени и количества товаров.

// Инструкция:

// Создайте HTML файл index.html с формой заказа товара, включающей поля для имени клиента, количества товаров и адреса доставки.
// Создайте JavaScript файл script3.js.
// Напишите код для валидации формы:
// Поле имени клиента не должно быть пустым и должно содержать минимум 3 символа.
// Поле количества товаров должно быть числом и не должно быть меньше 1.
// Поле адреса доставки не должно быть пустым.


const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName');
    const product = document.querySelector('#product');
    const adres = document.querySelector('#adres');
    if(userName.value.trim() === '' || userName.value.length < 3)
    {
        console.log('Слишком короткое имя');
    }
    if(product.value.trim() === '' || product.value.length < 1 || isNaN(product.value)){
        console.log('Введите корректное значение');
    }
    if(adres.value.trim() === ''){
        console.log('адрес не может быть пустым');
    }
})