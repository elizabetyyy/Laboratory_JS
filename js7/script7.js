
// Варіант 15
const numbers = [1, 3, 7, 8, 10, 5];
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
if (firstEvenIndex !== -1) {
    console.log(`Перший парний елемент: ${numbers[firstEvenIndex]}, його індекс: ${firstEvenIndex}`);
} else {
    console.log("Парних чисел немає");
}
