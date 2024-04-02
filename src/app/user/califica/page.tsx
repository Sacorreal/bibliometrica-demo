import { TableRateService } from "@/components/user/califica/table-service";

export default function page() {
  return (
    <div>
      <h1 className="font-semibold text-2xl my-4">
        Califica tus servicios aquí
      </h1>
      <TableRateService />
    </div>
  );
}
