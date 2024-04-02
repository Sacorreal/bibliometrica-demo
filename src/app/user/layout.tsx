import SideNav from "@/components/sidenav";
import NavLinks from "@/components/user/nav-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliometrica",
  description: "Biblioteca personalizada para tus usuarios",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav>
          <NavLinks />
        </SideNav>
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}
