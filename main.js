const value = 130; // get value from user
const result = []
const letters = ["m", "d", "c", "l", "x", "v", "i"];

function devideNumber(value) {

  let numbers = new Array(7); // m, d, c, l, x, v, remain

  if (value / 1000 >= 1) {
    numbers[0] = value / 1000;
    value -= numbers[0] * 1000;
  }
  if (value / 500 >= 1) {
    numbers[1] += 1;
  }
  if (value / 100 >= 1) {
    numbers[2] = value / 100;
    value -= numbers[2] * 100;
  }
  if (value / 50 >= 1) {
    numbers[3] += 1;
  }
  if (value / 10 >= 1) {
    numbers[4] = value / 10;
    value -= numbers[4] * 10;
  }
  if (value / 5 >= 1) {
    numbers[5] += 1;
  }
  if (value > 0) {
    numbers[6] = value;
  }
  writeRomanNum(numbers);
  return;
}

function writeRomanNum(numbers) {
  for (i = 0; i < 7; i++) {
    for (j = 0; j < numbers[i]; j++) {
      result.push(letters[i]);
    }
  }

  return;
}

function printResult() {
  console.log(result.join(''));

  return;
}

function mainProgram(value) {
  devideNumber(value);
  printResult();

  return;
}

mainProgram(value);