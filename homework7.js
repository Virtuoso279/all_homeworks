// task 1

function isNaNClone(checkValue) {
    let temp = checkValue - 5;
    if (temp < checkValue) {
        return false;
    } else {
        return true;
    }
}

console.log(isNaNClone("5.4"));
console.log(isNaN("5.4")); 

// task 2

function padClone(mainRow, symbol, amount, type) {
    if (mainRow.length >= amount) {
        return mainRow;
    } else {
        let freeSize = amount - mainRow.length;
        let symbolRow = '';

        for (let i = 0; i < freeSize; i++) {
            symbolRow += symbol;
        }

        let result = '';
        if (type) {
            // padStart
            result = symbolRow + mainRow; 
        } else {
            // padEnd
            result = mainRow + symbolRow; 
        }

        return result;
    }
}

console.log(padClone("hello", "x", 7, false));

// task 3

function checkProbabilityTheory(count) {
    let randomNumber = 0;
    let amountOdd = 0;
    let amountEven = 0;

    for (let i = 0; i < count; i++) {
        randomNumber = Math.random() * (1000 - 100 + 1) + 100;
        randomNumber = Math.floor(randomNumber);

        if (randomNumber % 2 === 1) {
            amountEven++;
        } else {
            amountOdd++;
        }
    }
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + amountOdd);
    console.log("Не парних чисел: " + amountEven);
    //я трохи переробив вивід двох параметрів нижче
    console.log("Відсоток парних до всієї кількості: " + amountOdd / count * 100 + "%");
    console.log("Відсоток не парних до всієї кількості: " + amountEven / count * 100 + "%");
}

checkProbabilityTheory(20);
