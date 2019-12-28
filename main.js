let value = 1; // get value from user
const letters = new Array(5); // m, d, c, l, x

function devideNumber(value) {
  if (value / 1000 >= 1) {
    letters[0] = value / 1000;
    value -= letters[0] * 1000;
  }
  if (value / 500 >= 1) {
    letters[1] = value / 500;
    value -= letters[1] * 500;
  }
  if (value / 100 >= 1) {
    letters[2] = value / 100;
    value -= letters[2] * 100;
  }
  if (value / 50 >= 1) {
    letters[3] = value / 50;
    value -= letters[3] * 50;
  }
  if (value / 10 >= 1) {
    letters[4] = value / 10;
    value -= letters[4] * 10;
  }
  if (value > 0) {
    getU8Code(value);
  }

  return;
}

function getU8Code(valueRemains) {

}