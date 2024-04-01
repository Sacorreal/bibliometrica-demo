import CategoriaServicios from "@/components/admin/CategoriaServicios";
import CurvaIngreso from "@/components/admin/CurvaIngreso";
import RecaudoMultas from "@/components/admin/RecaudoMultas";
import SatisfaccionGenServicios from "@/components/admin/SatisfaccionGenServicios";
import SatisServicio from "@/components/admin/SatisServicio";
import SolicitudDocumentos from "@/components/admin/SolicitudDocumentos";
import UsoServicios from "@/components/admin/UsoServicios";

export default function page() {
  return (
    <>
      <SolicitudDocumentos />
      <SatisfaccionGenServicios />
      <RecaudoMultas />
      <CategoriaServicios />
      <UsoServicios />
      <CurvaIngreso />
      <SatisServicio />
    </>
  );
}
