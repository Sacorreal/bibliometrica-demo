export default function SatisServicio() {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium  dark:text-white">
          Inducción biblioteca
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-yellow-300 h-2.5 rounded-full"
          style={{ width: "45%" }}
        />
      </div>
      <div className="flex justify-between my-2 mb-1">
        <span className="text-base font-medium dark:text-white">
          Préstamo libros
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          80%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: "80%" }}
        />
      </div>
    </>
  );
}
