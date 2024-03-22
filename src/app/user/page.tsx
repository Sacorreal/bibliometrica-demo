import Banners from "@/components/user/home/banners";
import { SelectSubjects } from "@/components/user/home/select-subjects";
import { SuggestedBooks } from "@/components/user/home/suggested-books";
import { SuggestedDb } from "@/components/user/home/suggested-db";
export default function User() {
  return (
    <>
      <Banners />
      <div className="flex flex-row  mt-3  justify-between ">
        <h5 className="text-2xl font-bold">
          Selecciona tu asignatura y conoce nuestros recomendados:
        </h5>
        <div className="mr-4">
          {" "}
          <SelectSubjects />
        </div>
      </div>
      <hr className="my-4" />
      <main>
        <h3 className="text-1xl font-bold mb-5 mt-5">Libros: </h3>
        <SuggestedBooks />
        <hr className="mt-5 mb-5" />
        <h3 className="text-1xl font-bold mb-5">Bases de datos: </h3>
        <SuggestedDb />
      </main>
    </>
  );
}
