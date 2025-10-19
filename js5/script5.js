// Цикл for: Вивести всі парні числа від 1 до 20
console.log("=== Парні числа від 1 до 20 ===");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Цикл while: Вивести всі числа від n до 1
let n = parseInt(prompt("Введіть число n для зворотного відліку:"));
console.log(`=== Числа від ${n} до 1 ===`);
while (n >= 1) {
    console.log(n);
    n--;
}

// Цикл do...while: Запитувати число, поки не введе позитивне
let k;
do {
    k = parseInt(prompt("Введіть позитивне число:"));
} while (k <= 0);
console.log("Ви ввели позитивне число:", k);

// Цикл for...in: Вивести всі ключі та значення об’єкта
let person = {
    name: "Єлизавета",
    age: 18,
    city: "Кривий Ріг"
};
console.log("=== Ключі та значення об'єкта ===");
for (let key in person) {
    console.log(key + ":", person[key]);
}

// Цикл for...of: Вивести всі елементи масиву у зворотному порядку
let arr = [1, 'two', 3, 'four', 'five'];
console.log("=== Масив у зворотному порядку ===");
for (let item of arr.slice().reverse()) {
    console.log(item);
}

// Методи масивів
let array_numbers = [12, 39, 60, 11, 4, 51, 23, 77];

// forEach()
console.log("=== Всі елементи масиву ===");
array_numbers.forEach(num => console.log(num));

// map(): квадрат чисел
let map_res = array_numbers.map(num => num * num);
console.log("=== Квадрати чисел ===");
console.log(map_res);

// filter(): числа більше 10
let big_num = array_numbers.filter(num => num > 10);
console.log("=== Числа більше 10 ===");
console.log(big_num);

