import { LineChart } from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 430];
const xLabels = ["1990", "2000", "2001", "2002", "2004", "2014", "2024"];

export default function EdadColeccion() {
  return (
    <LineChart
      width={900}
      height={300}
      series={[{ data: pData, label: "libros" }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
