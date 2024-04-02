import ConversionUsuarios from "@/components/admin/ConversionUsuarios";
import SelectFacultad from "@/components/admin/SelectFacultad";
import ServiciosUsuarios from "@/components/admin/ServiciosUsuarios";

export default function page() {
  return (
    <div className="mt-4 space-y-4">
      <ConversionUsuarios />
      <SelectFacultad />

      <ServiciosUsuarios />
    </div>
  );
}
