import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Clinical Key",
    Inversion: "$37.100.000",
    UsosUnicos: 1285,
    CostoUso: "$28.900",
    Roi: "99.93%",
  },
  {
    name: "OVID",
    Inversion: "$28.950.000",
    UsosUnicos: 83,
    CostoUso: "$348.500",
    Roi: "98.87%",
  },
  {
    name: "Ebsco",
    Inversion: "$37.100.000",
    UsosUnicos: 200,
    CostoUso: "$1.614.000",
    Roi: "95.61%",
  },
];

export function ROI() {
  return (
    <div className="shadow-md p-2">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Retorno de inversión recursos suscritos
      </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>RECURSO</TableHeaderCell>
            <TableHeaderCell>INVERSION</TableHeaderCell>
            <TableHeaderCell>USOS UNICOS</TableHeaderCell>
            <TableHeaderCell>COSTO POR USO</TableHeaderCell>
            <TableHeaderCell>ROI</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Inversion}</TableCell>
              <TableCell>{item.UsosUnicos}</TableCell>
              <TableCell>{item.CostoUso}</TableCell>
              <TableCell>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: "90%" }}
                  >
                    {" "}
                    {item.Roi}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
