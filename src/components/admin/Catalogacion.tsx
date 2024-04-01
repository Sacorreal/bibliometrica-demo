"use client";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Catalogacion() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Libro" },
            { id: 1, value: 15, label: "Audiovisuales" },
            { id: 2, value: 20, label: "Tesis" },
          ],
        },
      ]}
      width={900}
      height={200}
    />
  );
}
