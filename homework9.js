// task 1
console.log("Task 1\n");

let arr = [1, 6, 3, -4, 7, 6, 0, -8, -9];

console.log(arr);

arr.sort(myBlend)

function myBlend() {
    return 0.5 - Math.random();
}

console.log(arr);

// task 2
console.log("\nTask 2\n");

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

let clientsArray = company.clients;
let info = false;

function findValueByKey(companyName, partnersArray) {
    partnersArray.forEach(companyObject => {
        if (companyObject.name === companyName) {
            info = companyObject;
        } else {
            if (companyObject.partners !== undefined) {
                let partnersArray = companyObject.partners;
                findValueByKey(companyName, partnersArray);
            }
        }
    });
    if (!info) {
        return `Company with name "${companyName}" not found`;
    }
    return info;
}

let result = findValueByKey('Клієнт 1.2.3', clientsArray);

console.log(result);
