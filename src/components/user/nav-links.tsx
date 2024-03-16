"use client";
import {
  BriefcaseBusiness,
  CalendarDays,
  FileClock,
  Home,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/user", icon: Home },
  {
    name: "Historial",
    href: "/",
    icon: FileClock,
  },
  { name: "Eventos", href: "/", icon: CalendarDays },
  { name: "Servicios", href: "/user/servicios", icon: BriefcaseBusiness },
  { name: "Califica", href: "/user", icon: Star },
];

export default function NavLinks() {
  //apuntes: leer la ruta donde estamos si es igual, cambiar el color
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 
            ${pathname == link.href ? "bg-sky-100 text-blue-600" : ""}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}