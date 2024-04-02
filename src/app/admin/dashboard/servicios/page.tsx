import CategoriaServicios from "@/components/admin/CategoriaServicios";
import CurvaIngreso from "@/components/admin/CurvaIngreso";
import RecaudoMultas from "@/components/admin/RecaudoMultas";
import SatisfaccionGenServicios from "@/components/admin/SatisfaccionGenServicios";
import SatisServicio from "@/components/admin/SatisServicio";
import SolicitudDocumentos from "@/components/admin/SolicitudDocumentos";
import UsoServicios from "@/components/admin/UsoServicios";

export default function page() {
  return (
    <div>
      <div className="flex flex-row my-6 space-x-3">
        <SolicitudDocumentos />
        <SatisfaccionGenServicios />
        <RecaudoMultas />
      </div>
      <div className="my-4">
        <h1 className="font-bold text-3xl my-2">Uso de los servicios:</h1>
        <CategoriaServicios />
      </div>
      <UsoServicios />
      <div>
        <h1 className="font-bold text-3xl my-2">
          Curva de ingreso a la biblioteca:
        </h1>
        <CurvaIngreso />
      </div>
      <div>
        <h1 className="font-bold text-3xl my-6">
          Nivel de satisfaccion por servicio:
        </h1>
        <SatisServicio />
      </div>
    </div>
  );
}
