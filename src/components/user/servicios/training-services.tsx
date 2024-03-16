import Image from "next/image";
import Link from "next/link";

export interface ServicesTraining {
  title: string;
  cover: string;
  id: string;
  description: string;
}

export const listServices: ServicesTraining[] = [
  {
    title: "Búsqueda y recuperación de información",
    cover: "/amigos.jpg",
    description:
      "¿Quieres ir más allá en la búsqueda? Con esta formación tendrás la capacidad de buscar información de forma sistemática.",
    id: "1",
  },
  {
    title: "Usar los estilos de citación: APA y Vancouver",
    cover: "/bib.jpg",
    description:
      "Este taller orienta al usuario en los distintos elementos que componen las normas de citación cómo APA, Vancouver e IEEE.",
    id: "2",
  },
  {
    title: "Identidad Digital",
    cover: "/leyendo.jpg",
    description:
      "Conocer la importancia y los beneficios de la identidad digital como parte del proceso de investigación, mediante el conocimiento de plataformas académicas.",
    id: "3",
  },
];

export default function TrainingServices() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Servicios de Formación</h1>
      <div className="flex flex-row">
        {listServices.map((service) => (
          <div>
            <div className="relative flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 mx-2">
              <div className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <Image
                  src={service.cover}
                  alt="card-image"
                  width="300"
                  height="300"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {service.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {service.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/user/servicios/demo">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    + info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
