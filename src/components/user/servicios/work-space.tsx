import Image from "next/image";
import Link from "next/link";

export interface WorkSpace {
  title: string;
  cover: string;
  id: string;
  description: string;
}

export const listWorkSpace: WorkSpace[] = [
  {
    title: "Salas de Estudio",
    cover: "/sala-estudio.jpg",
    description: "Espacios para trabajar individual o en grupo",
    id: "1",
  },
  {
    title: "Auditorios",
    cover: "/auditorio.jpg",
    description: "Espacio disponible para dictar, charlas y capacitaciones",
    id: "2",
  },
  {
    title: "Salas de Audiovisuales",
    cover: "audiovisuales.jpg",
    description: "Proyectas películas y material audiovisual",
    id: "3",
  },
];

export default function WorkSpace() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Espacios de Trabajo</h1>
      <div className="flex flex-row">
        {listWorkSpace.map((service) => (
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
