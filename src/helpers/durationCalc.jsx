export function durationCalc(date = "October 20, 1988 04:40:00 GMT") {
  let birth = date;
  let born = new Date(birth);
  let now = new Date();
  let elapsed = now - born;

  var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

  return daysSinceBorn;
}

export function durationCalcYears(
  date = "October 20, 1988 04:40:00 GMT",
  decimals = 2
) {
  let years = durationCalc(date);

  return parseFloat(years / 365).toFixed(decimals);
}
