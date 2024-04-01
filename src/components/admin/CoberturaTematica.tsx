import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Generalidades",
    Cantidad: 200,
    Cobertura: "18%",
  },
  {
    name: "Filosofía & psicología",
    Cantidad: 180,
    Cobertura: "23%",
  },
  {
    name: "Religión",
    Cantidad: 20,
    Cobertura: "21%",
  },
  {
    name: "Ciencias sociales",
    Cantidad: 540,
    Cobertura: "35%",
  },
  {
    name: "Lenguas",
    Cantidad: 310,
    Cobertura: "43%",
  },
  {
    name: "Ciencias naturales & matemáticas",
    Cantidad: 621,
    Cobertura: "18%",
  },
  {
    name: "Tecnología",
    Cantidad: 598,
    Cobertura: "67%",
  },
  {
    name: "Artes",
    Cantidad: 344,
    Cobertura: "21%",
  },
  {
    name: "Literatura",
    Cantidad: 641,
    Cobertura: "39%",
  },
  {
    name: "Geografía & historia",
    Cantidad: 113,
    Cobertura: "28%",
  },
];

export function CoberturaTematica() {
  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Cobertura Temática
      </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Area</TableHeaderCell>
            <TableHeaderCell>Cantidad</TableHeaderCell>
            <TableHeaderCell>Cobertura</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Cantidad}</TableCell>
              <TableCell>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${item.Cobertura}` }}
                  >
                    {" "}
                    {item.Cobertura}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
