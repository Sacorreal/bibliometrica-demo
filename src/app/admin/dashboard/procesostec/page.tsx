import Catalogacion from "@/components/admin/Catalogacion";
import PromCatalogacion from "@/components/admin/PromCatalogacion";
import { RangoFecha } from "@/components/admin/RangoFecha";

export default function page() {
  return (
    <div>
      <PromCatalogacion />
      <RangoFecha />
      <Catalogacion />
    </div>
  );
}
