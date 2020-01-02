let value = 8; // get value from user
const result = []
const letters = ["m", "d", "c", "l", "x", "v", "i"];

const target = document.getElementById("target");

function devideNumber(value) {

  let numbers = [0, 0, 0, 0, 0, 0, 0]; // m, d, c, l, x, v, remain

  if (value / 1000 >= 1) {
    numbers[0] = Math.floor(value / 1000);
    value -= numbers[0] * 1000;
  }
  if (value / 500 >= 1) {
    numbers[1] = Math.floor(value / 500);
    value -= numbers[1] * 500;
  }
  if (value / 100 >= 1) {
    numbers[2] = Math.floor(value / 100);
    value -= numbers[2] * 100;
  }
  if (value / 50 >= 1) {
    numbers[3] = Math.floor(value / 50);
    value -= numbers[3] * 50;
  }
  if (value / 10 >= 1) {
    numbers[4] = Math.floor(value / 10);
    value -= numbers[4] * 10;
  }
  if (value / 5 >= 1) {
    numbers[5] = Math.floor(value / 5);
    value -= numbers[5] * 5;
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
  resultOnHTML = result.join('');
  target.textContent = resultOnHTML;

  return;
}

function mainProgram(value) {
  devideNumber(value);
  printResult();

  return;
}

mainProgram(value);