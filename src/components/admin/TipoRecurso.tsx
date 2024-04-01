import { PieChart } from "@mui/x-charts/PieChart";

export default function TipoRecurso() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 890, label: "Libros" },
            { id: 1, value: 745, label: "Tesis" },
            { id: 2, value: 290, label: "Revistas" },
            { id: 3, value: 190, label: "Audiovisuales" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
