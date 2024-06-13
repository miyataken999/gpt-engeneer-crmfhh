/**
 * Reads data from a Google Sheet and creates events in a Google Calendar.
 */

// Set up the spreadsheet and calendar
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = spreadsheet.getActiveSheet();
var calendarId = 'your_calendar_id'; // Replace with your calendar ID
var calendar = CalendarApp.getCalendarById(calendarId);

/**
 * Creates an event in the calendar based on the data in the sheet.
 * @param {Object} data The data from the sheet.
 */
function createEvent(data) {
  var title = data.title;
  var start = data.start;
  var end = data.end;
  var description = data.description;
  
  var event = calendar.createEvent(title, start, end, {description: description});
  Logger.log('Event created: %s', event.getTitle());
}

/**
 * Reads data from the sheet and creates events in the calendar.
 */
function readSheetAndCreateEvents() {
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var start = row[1];
    var end = row[2];
    var description = row[3];
    
    var eventData = {
      title: title,
      start: start,
      end: end,
      description: description
    };
    
    createEvent(eventData);
  }
}

// Run the script
function run() {
  readSheetAndCreateEvents();
}