export default function ConversionUsuarios() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Conversión de Usuarios
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Descubre la conversion de usuarios potenciales a reales y el uso que
            le dan a los servicios de la biblioteca
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Facultad
            </th>
            <th scope="col" className="px-6 py-3">
              Potenciales
            </th>
            <th scope="col" className="px-6 py-3">
              Reales
            </th>
            <th scope="col" className="px-6 py-3">
              Iteracción
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Facultad Medicina
            </th>
            <td className="px-6 py-4">120</td>
            <td className="px-6 py-4">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "15%" }}
                >
                  {" "}
                  15%
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-yellow-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "45%" }}
                >
                  {" "}
                  45%
                </div>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Facultad de Derecho
            </th>
            <td className="px-6 py-4">65</td>
            <td className="px-6 py-4">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-green-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "90%" }}
                >
                  {" "}
                  90%
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-green-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "80%" }}
                >
                  {" "}
                  80%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
