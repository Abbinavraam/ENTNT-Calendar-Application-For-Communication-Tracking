import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import './CalendarView.css';

function CalendarView({ events, onEventClick }) {
  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => {
          const eventDetails = events.find((event) => event.id === info.event.id);
          if (eventDetails && onEventClick) {
            onEventClick(eventDetails);
          }
        }}
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height="auto"
        editable={false}
        selectable={false}
        eventBackgroundColor="#007bff"
        eventBorderColor="#0056b3"
        eventTextColor="#fff"
      />
    </div>
  );
}

export default CalendarView;

