"use client";

import { Button } from "@/components/ui/button";
import DateSelector from "@/components/ui/CalendarService";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ServicesForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleClick = () => {
    alert("Servicio solicitado, espere la confirmación");
    location.href = "/user";
  };

  return (
    <div className="flex flex-col justify-items-center max-w-sm mx-auto space-y-3">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <DateSelector />
        <select className="mt-2" {...register("time", { required: true })}>
          <option value="">Selecciona la hora</option>
          <option value="8">8:00 am</option>
          <option value="9">9:00 am</option>
          <option value="11">11:00 am</option>
          <option value="13">1:00 pm</option>
          <option value="14">2:00 pm</option>
          <option value="16">4:00 pm</option>
        </select>
        <label className="block">¿Cuantas personas asisten?</label>
        <input {...register("users")} type="number" />
        <label className="block">Modalidad</label>
        <select {...register("modalidad", { required: true })}>
          <option value="virtual">Virtual</option>
          <option value="presencial">Presencial</option>
        </select>
        <label className="block">Comentarios:</label>
        <textarea
          {...register("aboutYou")}
          placeholder="¿Que más debemos saber?"
        />
        <div className="block">
          <Button onClick={handleClick}>Reservar</Button>
        </div>
      </form>
    </div>
  );
}
