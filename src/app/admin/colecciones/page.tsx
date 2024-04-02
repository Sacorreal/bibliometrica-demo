"use client";
import { CoberturaTematica } from "@/components/admin/CoberturaTematica";
import EdadColeccion from "@/components/admin/EdadColeccion";
import IdiomasColeccion from "@/components/admin/IdiomasColeccion";
import Inversion from "@/components/admin/Inversion";
import { NumEjemplares } from "@/components/admin/NumEjemplares";
import NumTitulos from "@/components/admin/NumTitulos";
import { ROI } from "@/components/admin/Roi";
import SelectFacultad from "@/components/admin/SelectFacultad";

export default function page() {
  return (
    <div className="mt-4 space-y-6">
      <div className="flex flex-row space-x-2">
        <Inversion />
        <NumEjemplares />
        <NumTitulos />
      </div>
      <div className="flex justify-items-center my-6">
        <h1 className="text-2xl font-semibold">Cobertura Idiomas</h1>
        <IdiomasColeccion />
      </div>
      <div className="flex justify-items-center my-6">
        <h1 className="text-2xl font-semibold">Edad de la Colección</h1>
        <EdadColeccion />
      </div>
      <SelectFacultad />
      <CoberturaTematica />

      <ROI />
    </div>
  );
}
