export default function Librarian() {
  return (
    <div className="w-full max-w-sm bg-blue-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-5">
        <img
          className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
          src="/librarian.jpg"
          alt="Bibliotecologo"
        />
        <h5 className="mb-1 text-xl font-medium dark:text-white">Luis Perez</h5>
        <span className="text-sm  dark:text-gray-400">
          Bibliotecologo Especializado
        </span>
        <span className="text-sm dark:text-gray-400">
          perez@biblioteca.edu.co
        </span>
      </div>
    </div>
  );
}
