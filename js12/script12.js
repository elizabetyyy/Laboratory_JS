// Функція, що приймає довільну кількість рядків
const combineStrings = (...strings) => {
    return strings.join(" "); // об'єднуємо через пробіл
};

const sentence = combineStrings("Це", "приклад", "функції", "з", "rest-параметрами.");
console.log(sentence); 
