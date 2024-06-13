# Google Apps Script: Read Google Sheet and Create Google Calendar Events

This script reads data from a Google Sheet and creates events in a Google Calendar.

## Setup

1. Create a new Google Sheet and add the data you want to use to create events.
2. Create a new Google Calendar and note the calendar ID.
3. Create a new Google Apps Script project and paste the code into the editor.
4. Replace `your_calendar_id` with your calendar ID.
5. Run the script by clicking the "Run" button or by calling the `run` function.

## How it works

The script reads data from the sheet and creates events in the calendar based on the data. The data should be in the following format:

| Title | Start | End | Description |
| --- | --- | --- | --- |
| Event 1 | 2023-03-01 10:00 | 2023-03-01 11:00 | This is event 1 |
| Event 2 | 2023-03-02 14:00 | 2023-03-02 15:00 | This is event 2 |

The script uses the `createEvent` function to create an event in the calendar based on the data in the sheet. The `readSheetAndCreateEvents` function reads the data from the sheet and calls the `createEvent` function for each row of data.

## Note

Make sure to replace `your_calendar_id` with your calendar ID and set up the script to run automatically if needed.