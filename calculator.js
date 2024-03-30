let unitMeasurement = 'кілометри';
let amount = 12.5;

let result;
switch (unitMeasurement) {
  case 'кілометри':
    result = amount + ' км це ' + amount * 1000 + ' м.';
    break;
  case 'години':
    result = amount + ' год це ' + amount * 60 + ' хв.';
    break;
  case 'кілограми':
    result = amount + ' кг це ' + amount * 1000 + ' грам.';
    break;
  default:
    result = 'Incorrect unit of measurement';
    break;
}

console.log(result);