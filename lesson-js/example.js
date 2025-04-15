let numberOne = prompt("Введите первое число");
let numberTwo = prompt("Введите второе число");
let operation = prompt("Выберите оперцаию: + - / * %");
numberOne = Number(numberOne);
numberTwo = Number(numberTwo) ;
if(operation == '+'){
    alert(numberOne + numberTwo);
}
else if(operation == '-'){
    alert(numberOne - numberTwo);
}
else if(operation == '/'){
    alert(numberOne / numberTwo);
}
else if(operation == '*'){
    alert(numberOne * numberTwo);
}
else if(operation == '%'){
    alert(numberOne + numberTwo);
} else {
    alert("Ошибка")
}



console.log("Таблица умножения на 7:");
    for(let i = 0; i < 10; i++)
    {
        console.log(`${i} * 7 = ${i * 7}`);
    }


for(let x = 0; x < 10; x++)
    {
        for(let y = 0; y < 10; y++)
        {
            console.log(`${x} * ${y} = ${x * y}`);
        }
    }



let summ = prompt("введите сумму");
summ = Number(summ);
let prozent = prompt("введите процент, который нужно вычислить от суммы");
prozent = Number(prozent);
alert(`Указанное количество процентов от суммы: ${summ * prozent / 100}`);
let message = confirm("хотите ли узнать остаток после вычитания вычисленного процента из исходной суммы");
if (message) {
    let result = summ - (summ * prozent / 100);
    alert(`Остаток после вычитания вычисленного процента из исходной суммы: ${result}`);
}





//практика б

let randomNumber = Math.floor(Math.random() * 100);
console.log("введите число")
let flag = false;
let numberUser = prompt("Введите число");
while (numberUser != randomNumber) {
    let numberUser = prompt("Введите число");
    numberUser = Number(numberUser);
    if (numberUser === randomNumber) {
        flag = true;
        alert(`Ураа вы угадали число: ${randomNumber}`);
        break;
    } else if (numberUser > randomNumber) {
        alert("ваше число больше загаданного");
    } else {
        alert("Ваше число меньше загаданного");
    }
}

// часть 1 
// 1
let userName = "Ivan";
let userAge = 16;
const isStudent = 18;
console.log(userName);
console.log(userAge);
if (userAge > isStudent) 
{
    console.log("Вы студент");
} else {
    console.log("Вы не студент");
}

//2
let a = 12;
let b = 3;
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const ost = a % b;
console.log("сумма: ", sum);
console.log("разность: ", difference);
console.log("произведение: ", product);
console.log("деление: ", quotient);
console.log("деление с остатком: ", ost);


//часть2
//3
let name = "iva";
let age = 42;
let bool = false;
let n = null;
let text = undefined;
console.log("Тип данных name: " + typeof name);
console.log("Тип данных age: " + typeof age);
console.log("Тип данных bool: " + typeof bool);
console.log("Тип данных n: " + typeof n);
console.log("Тип данных text: " + typeof text);

//4

let width = 10;
let height = 5;
let area = width * height;
console.log("Площадь прямоугольника: ", area);








