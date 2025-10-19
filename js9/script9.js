const squareArray = (arr) => arr.map(num => num ** 2);
const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);

console.log(squares); // [1, 4, 9, 16, 25]
