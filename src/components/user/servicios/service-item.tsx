export default function ServiceItem() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Búsqueda y recuperación de información
      </h1>
      <div className="flex flex-row">
        <div>
          <div className="relative flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 mx-2">
            <div className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/aLRCHBipmLE?si=ZUy_kP8_RwVoFW53"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="p-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                ¿Quieres ir más allá en la búsqueda? Con esta formación tendrás
                la capacidad de buscar información de forma sistemática.
                <strong>Objetivos de aprendizaje: </strong>Identificar el
                proceso de búsqueda de información Desarrollar estrategias para
                recuperar información Buscar información en los recursos
                digitales de acuerdo al área de interés
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
