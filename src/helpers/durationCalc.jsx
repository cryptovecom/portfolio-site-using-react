export function durationCalc() {
  let birth = "October 20, 1988 04:40:00 GMT";
  let born = new Date(birth);
  let now = new Date();
  let elapsed = now - born;

  var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

  return daysSinceBorn;
}

export function durationCalcYears() {
  let years = durationCalc();

  return parseFloat(years / 365).toFixed(2);
}
