import Link from "next/link";

export default function TableLend() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item
            </th>
            <th scope="col" className="px-6 py-3">
              Título
            </th>
            <th scope="col" className="px-6 py-3">
              N° Clasificación
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha Préstamo
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha Devolución
            </th>
            <th scope="col" className="px-6 py-3">
              Vencimiento Préstamo
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
              Libro
            </th>
            <td className="px-6 py-4">Medicina Básica I</td>
            <td className="px-6 py-4">658.M34L</td>
            <td className="px-6 py-4">18/03/2024</td>
            <td className="px-6 py-4">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                PENDIENTE
              </span>
            </td>
            <td className="px-6 py-4">28/03/2024</td>
            <td className="px-6 py-4">
              <Link
                href="/user"
                className="mx-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                Renovar
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Libro
            </th>
            <td className="px-6 py-4">Anatomía</td>
            <td className="px-6 py-4">601.A567p</td>
            <td className="px-6 py-4">30/03/2024</td>
            <td className="px-6 py-4">03/04/2024</td>
            <td className="px-6 py-4">28/04/2024</td>
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
    