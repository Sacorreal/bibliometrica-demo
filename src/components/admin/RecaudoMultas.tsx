import { Card } from "@tremor/react";

export default function RecaudoMultas() {
  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Recaudo de Multas
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: "60%" }}
          >
            {" "}
            60%
          </div>
        </div>
      </p>
    </Card>
  );
}
