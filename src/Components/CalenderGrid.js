import React from "react";
import "../styles/CalenderGrid.css";

const eventsData = [
  { time: "08:00", title: "Jai Shree Ram", duration: 60 },
  { time: "09:00", title: "Buddha 2023", duration: 60 },
  { time: "09:00", title: "Office chill track", duration: 60 },
  { time: "10:00", title: "S Prank", duration: 60 },
  { time: "10:00", title: "Jacob Jones", duration: 60 },
  { time: "10:00", title: "Kristen Watson", duration: 60 },
  { time: "11:00", title: "Arlene messy track", duration: 60 },
  { time: "11:00", title: "Esther Track", duration: 60 },
  { time: "12:00", title: "Chloe McKinney Hits", duration: 120 },
];
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};
const arrangeEvents = (events) => {
  const arrangedEvents = [];

  events.forEach((event, index) => {
    const startTime = timeToMinutes(event.time);
    const endTime = startTime + event.duration;

    let overlapFound = false;

    arrangedEvents.forEach((column) => {
      const lastEventInColumn = column[column.length - 1];
      const lastEventEndTime =
        timeToMinutes(lastEventInColumn.time) + lastEventInColumn.duration;

      if (lastEventEndTime <= startTime) {
        column.push(event);
        overlapFound = true;
      }
    });
    if (!overlapFound) {
      arrangedEvents.push([event]);
    }
  });

  return arrangedEvents;
};

const CalendarGrid = () => {
  const arrangedEvents = arrangeEvents(eventsData);

  const renderColumns = () => {
    return arrangedEvents.map((column, colIndex) => (
      <div className="event-column" key={colIndex}>
        {column.map((event, index) => {
          const rowHeight = 50; // Height for each time slot
          const startHour = parseInt(event.time.split(":")[0]);
          const startMinute = parseInt(event.time.split(":")[1]);
          const eventPosition =
            (startHour - 8) * rowHeight + (startMinute / 60) * rowHeight;

          return (
            <div
              className="calendar-event"
              style={{
                top: `${eventPosition}px`,
                height: `${(event.duration / 60) * rowHeight}px`,
              }}
              key={index}
            >
              <p>{event.title}</p>
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      <div className="time-column">
        {[
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
        ].map((time, index) => (
          <div key={index} className="time-slot">
            {time}
          </div>
        ))}
      </div>
      <div className="events-wrapper">{renderColumns()}</div>
    </div>
  );
};

export default CalendarGrid;
