"use client";
import { Button } from "@/components/ui/button";
import { CalendarService } from "@/components/ui/calendar-service";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ServicesForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleClick = () => {
    //TODO:agregar un toast y funcion redirect de next
    alert("Servicio solicitado, espere la confirmación");
    location.href = "/user";
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <CalendarService />
        <select {...register("time", { required: true })}>
          <option value="">Selecciona la hora</option>
          <option value="8">8:00 am</option>
          <option value="9">9:00 am</option>
          <option value="11">11:00 am</option>
          <option value="13">1:00 pm</option>
          <option value="14">2:00 pm</option>
          <option value="16">4:00 pm</option>
        </select>
        <label>¿Cuantas personas asisten?</label>
        <input {...register("users")} type="number" />
        <label>Modalidad</label>
        <select {...register("modalidad", { required: true })}>
          <option value="virtual">Virtual</option>
          <option value="presencial">Presencial</option>
        </select>
        <textarea
          {...register("aboutYou")}
          placeholder="¿Que más debemos saber?"
        />
        <Button onClick={handleClick}>Reservar</Button>
      </form>
    </>
  );
}
