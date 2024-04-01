"use client";
import { LineChart } from "@mui/x-charts/LineChart";

export default function CurvaIngreso() {
  return (
    <LineChart
      xAxis={[
        { data: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
      ]}
      series={[
        {
          data: [
            34, 45, 71, 80, 110, 132, 156, 171, 191, 201, 65, 52, 53, 79, 101,
          ],
        },
      ]}
      width={900}
      height={500}
    />
  );
}
