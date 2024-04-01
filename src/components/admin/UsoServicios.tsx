"use client";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [400, 300, 200, 278, 189];
const pData = [390, 139, 380, 398, 480];
const prData = [440, 139, 100, 308, 400];
const mData = [400, 138, 70, 308, 400];
const docData = [500, 138, 120, 208, 410];
const adminData = [603, 199, 187, 203, 300];
const Labels = ["Libros", "Salas", "Audiovisuales", "PC", "Audifonos"];

export default function UsoServicios() {
  return (
    <BarChart
      width={950}
      height={500}
      series={[
        { data: pData, label: "Pregrado", id: "pvId" },
        { data: uData, label: "Especializacion", id: "uvId" },
        { data: prData, label: "Maestría", id: "prId" },
        { data: mData, label: "Doctorado", id: "mId" },
        { data: docData, label: "Docente", id: "docId" },
        { data: adminData, label: "Administrativo", id: "adminId" },
      ]}
      xAxis={[{ data: Labels, scaleType: "band" }]}
    />
  );
}
