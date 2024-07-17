// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var getMonthlyVisitorReport = function (monthArray, week, dayInWeek) {
  var weekArray = monthArray[week - 1];
  return getVisitorReport(weekArray, dayInWeek);
};

var week1 = [354, 132, 210, 221, 481, 290, 150];
var week2 = [124, 432, 190, 241, 301, 280, 160];
var week3 = [334, 142, 250, 221, 431, 270, 180];
var week4 = [254, 122, 230, 211, 371, 260, 140];

var month = [week1, week2, week3, week4];

var report1 = getVisitorReport(week1, 5); // Friday of week 1
console.log(report1); // Should log "There were 481 visitors on Friday"

var monthlyReport = getMonthlyVisitorReport(month, 2, 5); // Week 2, Friday
console.log(monthlyReport); // Should log "There were 301 visitors on Friday"


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */