// task 1
console.log("Task 1\n");

const text = "hjewawhe wq AAe weaweqwopAAA w";

const pattern = /[^aA\s]{6,}/;

const result = text.match(pattern);
console.log(result[0]);

// task 2
console.log("\nTask 2\n");

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const pattern2 = /^\w+\.?\w+@(gmail\.com|yahoo\.com)/;

let emailArray = [];
arr.forEach(user => {
    let email = user.email;
    let isMatch = pattern2.test(email);
    let result = email.match(pattern2);

    if (isMatch && result[0].length === email.length) {
        emailArray.push(email);
    }
});

console.log(emailArray);

// ^\w+\.?\w+@(gmail\.com|yahoo\.com)