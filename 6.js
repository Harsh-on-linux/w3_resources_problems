const year = 1601;

const leapYearCalculator = function (year) {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

if (leapYearCalculator(year)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
