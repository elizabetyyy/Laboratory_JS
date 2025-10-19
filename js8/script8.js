function absValue(num) {
    if (num < 0) {
        return -num; 
    } else {
        return num;  
    }
}

console.log(absValue(5));    // 5
console.log(absValue(-7));   // 7
console.log(absValue(0));    // 0
