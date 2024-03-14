import { Library } from "lucide-react";

export default function LibraryLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <Library className="h-12 w-12" />
      <p className="text-[20px]">Biblioteca</p>
    </div>
  );
}
