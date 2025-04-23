// let numberOne = prompt("Введите первое число");
// let numberTwo = prompt("Введите второе число");
// let operation = prompt("Выберите оперцаию: + - / * %");
// numberOne = Number(numberOne);
// numberTwo = Number(numberTwo) ;
// if(operation == '+'){
//     alert(numberOne + numberTwo);
// }
// else if(operation == '-'){
//     alert(numberOne - numberTwo);
// }
// else if(operation == '/'){
//     alert(numberOne / numberTwo);
// }
// else if(operation == '*'){
//     alert(numberOne * numberTwo);
// }
// else if(operation == '%'){
//     alert(numberOne + numberTwo);
// } else {
//     alert("Ошибка")
// }



// console.log("Таблица умножения на 7:");
//     for(let i = 0; i < 10; i++)
//     {
//         console.log(`${i} * 7 = ${i * 7}`);
//     }


// for(let x = 0; x < 10; x++)
//     {
//         for(let y = 0; y < 10; y++)
//         {
//             console.log(`${x} * ${y} = ${x * y}`);
//         }
//     }



// let summ = prompt("введите сумму");
// summ = Number(summ);
// let prozent = prompt("введите процент, который нужно вычислить от суммы");
// prozent = Number(prozent);
// alert(`Указанное количество процентов от суммы: ${summ * prozent / 100}`);
// let message = confirm("хотите ли узнать остаток после вычитания вычисленного процента из исходной суммы");
// if (message) {
//     let result = summ - (summ * prozent / 100);
//     alert(`Остаток после вычитания вычисленного процента из исходной суммы: ${result}`);
// }





// //практика б

// let randomNumber = Math.floor(Math.random() * 100);
// console.log("введите число")
// let flag = false;
// let numberUser = prompt("Введите число");
// while (numberUser != randomNumber) {
//     let numberUser = prompt("Введите число");
//     numberUser = Number(numberUser);
//     if (numberUser === randomNumber) {
//         flag = true;
//         alert(`Ураа вы угадали число: ${randomNumber}`);
//         break;
//     } else if (numberUser > randomNumber) {
//         alert("ваше число больше загаданного");
//     } else {
//         alert("Ваше число меньше загаданного");
//     }
// }

// // часть 1 
// // 1
// let userName = "Ivan";
// let userAge = 16;
// const isStudent = 18;
// console.log(userName);
// console.log(userAge);
// if (userAge > isStudent) 
// {
//     console.log("Вы студент");
// } else {
//     console.log("Вы не студент");
// }

// //2
// let a = 12;
// let b = 3;
// const sum = a + b;
// const difference = a - b;
// const product = a * b;
// const quotient = a / b;
// const ost = a % b;
// console.log("сумма: ", sum);
// console.log("разность: ", difference);
// console.log("произведение: ", product);
// console.log("деление: ", quotient);
// console.log("деление с остатком: ", ost);


// //часть2
// //3
// let name = "iva";
// let age = 42;
// let bool = false;
// let n = null;
// let text = undefined;
// console.log("Тип данных name: " + typeof name);
// console.log("Тип данных age: " + typeof age);
// console.log("Тип данных bool: " + typeof bool);
// console.log("Тип данных n: " + typeof n);
// console.log("Тип данных text: " + typeof text);

// //4

// let width = 10;
// let height = 5;
// let area = width * height;
// console.log("Площадь прямоугольника: ", area);




// function showText(name, age, version)
// {
//     console.log(`Меня зовут ${name}, мне ${age} лет, версия ${version}`);

// }

// showText('ivan', 16, 'pro')



// const showText = (name, age, version) => 
//     console.log(`Меня зовут ${name}, мне ${age} лет, версия ${version}`);

// showText('ivan', 16, 'pro');




// let numberOne = prompt("Введите первое число");
// numberOne = Number(numberOne);
// let numberTwo = prompt("Введите второе число");
// numberOne = Number(numberOne);
// let operation = prompt("Введите операцию");
// function addition(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
// function subtraction(numberOne, numberTwo) {
//     return numberOne - numberTwo
// }
// function division(numberOne, numberTwo) {
//     return numberOne / numberTwo
// }
// function multiplication (numberOne, numberTwo) {
//     return numberOne * numberTwo
// }
// function division_with_remainder(numberOne, numberTwo) {
//     return numberOne % numberTwo
// }

// function calculator(operation) {
//     switch (operation) {
//         case "+":
//             addition(numberOne, numberTwo);
//             break;
//         case "-":
//             subtraction(numberOne, numberTwo);
//             break;
//         case "/":
//             division(numberOne, numberTwo);
//             break;
//         case "*":
//             multiplication(numberOne, numberTwo);
//             break;
//         case "/":
//             division_with_remainder(numberOne, numberTwo);
//             break;
//         default:
//             console.log("Ошибка проверьте выбор операции");
//             break;
//     }
// }


// calculator(numberOne, numberTwo);




// let operation = prompt("Введите название градусов(цельсия/Фаренгейт");
// let grad = prompt("Введите количество градусов");
// grad = Number(grad);
// function celsiusToFahrenheit(grad) {
//     return grad  * 9/5 + 32;
// }

// function fahrenheitToCelsius(grad) {
//     return 5/9 * (grad - 32);
// }

// function perevod(operation)
// {
//     switch (operation) {
//         case "цельсия":
//             celsiusToFahrenheit(temp_c);
//             break;
//         case "Фаренгейт":
//             fahrenheitToCelsius(temp_f);
//             break;
//         default:
//             console.log("Ошибка проверьте выбор операции");
//             break;
//     }
// }

// perevod(operation);



// //дз
// //основная часть 
// //1

// let ages = Number(prompt("Введите свой возраст"));
// if(ages < 18){
//     console.log("Вы ещё слишком молоды");
// } else if(18 <= ages && ages <= 65) {
//     console.log("Добро пожаловать!");
// } else {
//     console.log("Пожалуйста, будьте осторожны");
// }

//  //2

// let number = Number(prompt("Введите число"));
// let additions = 0;
// for(let i = 1; i <= number; i++){
//     additions += i;
// }
// console.log(`Сумма чисел от 1 до ${number} = ${additions}`);


//  //3
// function square(r)
// {
//     const p = 3.14;
//     console.log(`Площадь круга с радиусом ${r} равна ${p * (r * r)}`);
// }
// let r = Number(prompt("Введите радиус"));
// square(r);


// //часть продвинутая
// //4

// let numbers = Number(prompt("Введите число"));
// for (let i = 2; i <= numbers; i++) {
//   let primeNumbers = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       primeNumbers = false;
//       break;
//     }
//   }
//   if (primeNumbers) {
//     console.log(i);
//   }
// }


//  //5 

// for(let x = 0; x < 10; x++)
//     {
//         for(let y = 0; y < 10; y++)
//         {
//             console.log(`${x} * ${y} = ${x * y}`);
//         }
//     }
// console.log('');


//дз 
//основная часть 
//1

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.shift();
numbers.unshift(0);
numbers.pop();
console.log(numbers);

//2
let user = {
    name: "ivan",
    age: 16,
    isStudents: false
}
function informationUser(user){
    return `Имя ${user.name}, Возраст: ${user.age}, Статус: ${user.isStudents}`;
}
console.log(informationUser(user));

//3 

function add(array)
{
    return array.map(number => number * 2);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Оригинал: ${array}`)
console.log(`Измененный: ${add(array)}`);



//Продвинутая 
//4

function filterNumber(arrayNumber)
{
    return arrayNumber.filter(number => number > 5);
}

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Оригинал: ${arrayNumber}`)
console.log(`Измененный: ${filterNumber(arrayNumber)}`);

//5

function sumArray(arraySum) {
    return arraySum.reduce((acc, number) => acc + number, 0);
  }
  
let arraySum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Оригинал: ${arraySum}`)
console.log(`Измененный: ${sumArray(arraySum)}`);

//6

let shop = {
    name: "Цум",
    products: [
      { productName: "Штаны", price: 100000 },
      { productName: "Свиторы", price: 50000 },
      { productName: "Обувь", price: 900000 },
      { productName: "Головные уборы", price: 200000 }
    ]
  };
  
  function SumPrice(shop) {
    return shop.products.reduce((acc, product) => acc + product.price, 0);
  }

  console.log(SumPrice(shop));