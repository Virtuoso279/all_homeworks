// task 1

function rawTriangle1(side, symbol) {
    for (let i = 1; i <= side; i++) {
        let line = '';
        for (let k = 0; k < i; k++) {
            line += symbol;           
        }
        console.log(line);
    }
}

let line = '';
function rawTriangle2(side, symbol) {
    for (let i = 0, line = symbol; i < side; line += symbol) {
        console.log(line);
        i++;
    }
}

rawTriangle1(5, "o");
console.log();
rawTriangle2(4, "+");

//task 2

function calculateSum(first, last) {
    let result = 0;
    for (let i = first; i <= last; i++) {
        if (i % 3 === 0) {
            continue;
        } else {
            result += i;
        }        
    }
    console.log(result);
}

calculateSum(1, 100);
console.log();

//task 3

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;        
    }
    console.log(result);
}

pow(2, 3);