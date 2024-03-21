export default function TablePenalty() {
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
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Valor
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
            <td className="px-6 py-4">$5.000</td>
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
            <td className="px-6 py-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                PAGADO
              </span>
            </td>

            <td className="px-6 py-4">$15.500</td>
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
