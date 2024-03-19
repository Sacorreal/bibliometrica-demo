import RatingService from "@/components/user/califica/rating";
import Link from "next/link";

export function TableRateService() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Calificacion
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Detalle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Medicina básica I
            </th>
            <td className="px-6 py-4">Préstamo</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                Calificado
              </div>
            </td>
            <td className="px-6 py-4 text-yellow-300">
              <RatingService />
            </td>
            <td className="px-6 py-4">
              <Link
                href="/user/califica/detalle"
                className="mx-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                + info
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Búsqueda de información
            </th>
            <td className="px-6 py-4">Formación</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />{" "}
                Pendiente
              </div>
            </td>
            <td className="px-6 py-4 text-yellow-300"></td>
            <td className="px-6 py-4">
              <Link
                href="/user"
                className="mx-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                + info
              </Link>
              <Link
                href="/user/califica/encuesta"
                className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >
                Calificar
              </Link>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Solicitud de Compra
            </th>
            <td className="px-6 py-4">Trámite documento</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                Calificado
              </div>
            </td>
            <td className="px-6 py-4 text-yellow-300">
              <RatingService />
            </td>
            <td className="px-6 py-4">
              <Link
                href="/user/califica/detalle"
                className="mx-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                + info
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
