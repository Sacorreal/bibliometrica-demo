import { PieChart } from "@mui/x-charts/PieChart";

export default function IdiomasColeccion() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 890, label: "Español" },
            { id: 1, value: 745, label: "Ingles" },
            { id: 2, value: 290, label: "Portugues" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
