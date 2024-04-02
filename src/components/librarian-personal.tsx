import Image from "next/image";
export default function Librarian() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="p-8 rounded-t-lg"
        src="/librarian.jpg"
        alt="bibliotecologo"
      />

      <div className="px-3 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Jhon Melvin Dewey
        </h5>
        <span>Bibliotecologo especializado Facultad Medicina</span>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            Correo:
          </span>
          <h1>jhon@biblioteca.edu.co</h1>
        </div>
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            Contacto:
          </span>
          <h1>3340989 ext-1234</h1>
        </div>
      </div>
    </div>
  );
}
