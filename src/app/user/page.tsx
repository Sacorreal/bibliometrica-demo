import Image from "next/image";
export default function User() {
  return (
    <>
      <Image
        className="rounded-lg"
        src="/capacitacion1.jpg"
        width={800}
        height={800}
        alt="Servicio biblioteca"
      />
    </>
  );
}
