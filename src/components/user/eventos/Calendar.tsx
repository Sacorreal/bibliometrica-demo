"use client";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

dayjs.locale("es");

export default function CalendarLibrary() {
  const localizer = dayjsLocalizer(dayjs);
  const events = [
    {
      start: dayjs("2024-03-30T12:00:00").toDate(),
      end: dayjs("2024-03-30T13:00:00").toDate(),
      title: "Normas APA",
    },
    {
      start: dayjs(Date.now()).toDate(),
      end: dayjs(Date.now()).toDate(),
      title: "Capacitacion",
    },
    {
      start: dayjs("2024-04-30T12:00:00").toDate(),
      end: dayjs("2024-04-30T13:00:00").toDate(),
      title: "Taller",
    },
    {
      start: dayjs("2024-03-30T12:00:00").toDate(),
      end: dayjs("2024-03-30T13:00:00").toDate(),
      title: "Seminario",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          event: "Evento",
          time: "Hora",
          date: "Fecha",
        }}
      />
    </div>
  );
}
