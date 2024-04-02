import Catalogacion from "@/components/admin/Catalogacion";
import PromCatalogacion from "@/components/admin/PromCatalogacion";
import { RangoFecha } from "@/components/admin/RangoFecha";

export default function page() {
  return (
    <div className="mt-4 space-y-4">
      <PromCatalogacion />
      <RangoFecha />
      <Catalogacion />
    </div>
  );
}
