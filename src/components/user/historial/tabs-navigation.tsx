import { BookOpenCheck, CalendarFold, CircleDollarSign } from "lucide-react";
import Link from "next/link";

export default function TabsNavigation() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 items-center">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mx-4">
          <Link
            href="/user/historial/agenda"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <CalendarFold />
            Agenda
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="/user/historial/prestamos"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            aria-current="page"
          >
            <BookOpenCheck />
            Préstamos
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="/user/historial/multas"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <CircleDollarSign />
            Multas
          </Link>
        </li>
      </ul>
    </div>
  );
}
