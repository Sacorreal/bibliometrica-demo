import Link from "next/link";

export default function TableEvents() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Hora
            </th>
            <th scope="col" className="px-6 py-3">
              Lugar
            </th>
            <th scope="col" className="px-6 py-3">
              Sala
            </th>
            <th scope="col" className="px-6 py-3">
              Bibiotecólogo
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              31/07/2024
            </th>
            <td className="px-6 py-4">Asesoría Personalizada</td>
            <td className="px-6 py-4">10:00 am</td>
            <td className="px-6 py-4">Biblioteca Central Bloque H</td>
            <td className="px-6 py-4">Sala A - piso 3</td>
            <td className="px-6 py-4">Melvin Dewey</td>
            <td className="px-6 py-4">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                PROGRAMADO
              </span>
            </td>
            <td className="px-6 py-4 flex flex-row justify-center my-auto mt-5">
              <Link
                href="/user"
                className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
              >
                REPROGRAMAR
              </Link>
              <button className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                CANCELAR
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              31/12/2023
            </th>
            <td className="px-6 py-4">Búsqueda de información</td>
            <td className="px-6 py-4">7:00 am</td>
            <td className="px-6 py-4">Biblioteca Medicina Bloque G</td>
            <td className="px-6 py-4">Piso 1</td>
            <td className="px-6 py-4">Jhon Doe</td>
            <td className="px-6 py-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                REALIZADO
              </span>
            </td>
            <td className="px-6 py-4">
              <Link
                href="/user"
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                CALIFICAR
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
