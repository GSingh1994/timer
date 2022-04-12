// save time from user
const givenTime = process.argv.slice(2);

//remove negative and NaN numbers
const removeNegatives = givenTime.filter((num) => num && num >= 1);

// append 00 to end of time to turn ms to s
const addZerosToTimer = () =>
  removeNegatives.map((time) => parseInt((time += '000')));

const timerWithZeros = addZerosToTimer();

for (const timer of timerWithZeros) {
  setTimeout(() => {
    console.log(`${timer}ms beep`);
    process.stdout.write('\x07');
  }, timer);
}
