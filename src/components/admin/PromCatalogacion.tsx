import { Card } from "@tremor/react";

export default function PromCatalogacion() {
  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Tiempo promedio de catalogación
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        24 minutos
      </p>
    </Card>
  );
}
