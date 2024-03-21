import { Rating } from "@mui/material";
//formulario para evaluar el préstamo de libros
export default function ServiceSurvey() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Encuesta de Satisfacción
        </h2>
        <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Ayudanos a mejorar, cuentanos como te sentiste utilizando nuestros
          servicios:
        </p>
        <form action="/user" className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              ¿Cómo calificas a la persona que brindó el servicio?
            </label>
            <Rating />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              ¿Cómo calificas las políticas del servicio?{" "}
              <span>
                tiempos de préstamo, cantidad de libros permitidos, etc.{" "}
              </span>
            </label>
            <Rating />
            <div>
              <label className="block my-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                ¿Cómo calificas la calidad de la información consultada?
              </label>
              <Rating />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Comentarios
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Escribe tus comentarios..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
