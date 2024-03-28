var prompt = require('prompt');

prompt.start();

prompt.get(['age'], function (err, result) {
  let checkVariable = result.age - 1;
  checkVariable++;

  if (isNaN(checkVariable) || checkVariable <= 0 || checkVariable > 101) {
    console.log('Incorrect input!');
  } else {
    let answer = '';

    if (checkVariable > 4 && checkVariable < 21) {
      answer = 'років'
    } else {
      switch (checkVariable % 10) {
        case 1:
          answer = 'рік';
          break;
        case 2:
        case 3:
        case 4:
          answer = 'роки';
          break;
        default:
          answer = 'років';
          break;
      }
    }
    console.log('Result: ' + checkVariable + " " + answer);
  }
});
