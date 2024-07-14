// A calendar event constructor
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [
            this.startDate,
            " - (",
            this.startTime,
            " - ",
            this.endTime, ")"
        ].join("");
      
        console.log(this.title + ": " + dateString);
    };
};

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

var calEvent2 = new CalendarEvent(
    "Conference",
    "3/9/23",
    "2.00pm",
    "5.00pm"
);



calEvent.showEvent();
calEvent2.showEvent();

/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */