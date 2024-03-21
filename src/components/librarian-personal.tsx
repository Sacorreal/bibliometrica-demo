import Link from "next/link";

export default function Librarian() {
  return (
    <div className="w-full max-w-sm bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-5">
        <img
          className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
          src="/librarian.jpg"
          alt="Bibliotecologo"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Luis Perez
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Bibliotecologo Especializado
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          perez@biblioteca.edu.co
        </span>
        <div className="flex mt-4 md:mt-6">
          <Link
            href="/user"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agendar asesoria
          </Link>
        </div>
      </div>
    </div>
  );
}
