import SideNav from "@/components/sidenav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <Avatar className="mt-3 mx-3">
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
