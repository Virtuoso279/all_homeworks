// task 1
console.log("Завдання 1\n");

let user = {
    name: "Igor",
    age: 20,
    salary: 15000,
    position: "QA Support",
    getInfo: function () {
        let result = "";
        for (let key in this) {
            if (key == "getInfo") {
                continue;
            }
            result += key + ": " + this[key] + "\n";
        }
        return result;
    }
};

console.log(user.getInfo());

user.birthDate = "30.12.2003";

console.log(user.getInfo());

// task 2
console.log("Завдання 2\n");

let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн",
    price: function () {
        let sum = 0;
        for (let key in this) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") {
                continue;
            }

            let value = this[key].slice(0, -4);
            if (isNaN(value)) {
                sum = "Incorrect value of price!";
                break;
            }

            sum += Number(value);
        }
        return sum;
    },
    minPrice: function () {
        let minValue = 9999999;
        for (let key in this) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") {
                continue;
            }

            let value = this[key].slice(0, -4);
            if (isNaN(value)) {
                minValue = "Incorrect value of price!";
                break;
            }

            if (minValue > Number(value)) {
                minValue = Number(value);
            }
        }
        return minValue;
    },
    maxPrice: function () {
        let maxValue = 0;
        for (let key in this) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") {
                continue;
            }

            let value = this[key].slice(0, -4);
            if (isNaN(value)) {
                maxValue = "Incorrect value of price!";
                break;
            }

            if (maxValue < Number(value)) {
                maxValue = Number(value);
            }
        }
        return maxValue;
    }
};

//=====
console.log("Загальна вартість:");

console.log(services.price());

services["розбити скло"] = "40 грн";

console.log(services.price());

//=====
console.log("\nМінімальне значення");

console.log(services.minPrice());

//=====
console.log("\nМаксимальне значення");

console.log(services.maxPrice());

services["розбити авто"] = "1000 грн";

console.log(services.maxPrice());
