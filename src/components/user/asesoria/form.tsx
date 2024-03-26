"use client";

import { Button } from "@/components/ui/button";
import DateSelector from "@/components/ui/CalendarService";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AdvisoryForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleClick = () => {
    alert("Servicio solicitado, espere la confirmación");
    location.href = "/user";
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto space-y-3">
      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <DateSelector />
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("time", { required: true })}
        >
          <option value="">Selecciona la hora</option>
          <option value="8">8:00 am</option>
          <option value="9">9:00 am</option>
          <option value="11">11:00 am</option>
          <option value="13">1:00 pm</option>
          <option value="14">2:00 pm</option>
          <option value="16">4:00 pm</option>
        </select>
        <label className="block">¿Cuantas personas asisten?</label>
        <input
          {...register("users")}
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
         <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("time", { required: true })}
        >
          <option value="">Temas asesoria</option>
          <option value="8">Búsqueda información</option>
          <option value="9">Gestores bibliográficos</option>
          <option value="11">Marketing científico</option>
          <option value="13">Antiplagio</option>          
        </select>
        <label className="block">Modalidad</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("modalidad", { required: true })}
        >
          <option value="virtual">Virtual</option>
          <option value="presencial">Presencial</option>
        </select>
        <label className="block">Comentarios:</label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
