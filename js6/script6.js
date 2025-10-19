// 1. Через літерал
let fruits = ["яблуко", "банан", "вишня"];

// 2. Через конструктор Array
let vegetables = new Array("морква", "капуста", "буряк");

// Додавання елементів
fruits.push("апельсин");      // додає в кінець
vegetables.unshift("перець"); // додає на початок

// Видалення елементів
fruits.pop();          // видаляє останній елемент
vegetables.shift();    // видаляє перший елемент

// Завдання Варіант 15: об'єднати масив рядків у один рядок
let stringsArray = ["Це", "приклад", "об'єднання", "масиву"];
let combinedString = stringsArray.join(" "); // об'єднання через пробіл

// Вивід результатів на сторінку
document.getElementById("result").innerHTML = `
Масив fruits: ${fruits}<br>
Масив vegetables: ${vegetables}<br>
Об'єднаний рядок: "${combinedString}"
`;

// Також виведемо в консоль
console.log("Масив fruits:", fruits);
console.log("Масив vegetables:", vegetables);
console.log("Об'єднаний рядок:", combinedString);
