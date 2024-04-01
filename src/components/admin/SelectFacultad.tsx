export default function SelectFacultad() {
  return (
    <div>
      <label
        htmlFor="small"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Unidad Académica
      </label>

      <select
        id="small"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="fm">Faculta Medicina</option>
        <option value="fd">Facultad Derecho</option>
        <option value="di">Departamento Investigación</option>
        <option value="en">Escuela de Negocios</option>
      </select>
    </div>
  );
}
