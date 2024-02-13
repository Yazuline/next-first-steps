import { Children } from "react";
import { LayoutProps } from '../../.next/types/app/layout';
import { Navbar } from "@/components";


export default function BaseLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col items-center pl-24">
      <span>Hola Layout desde -general-</span>
      {children}
    </main>
    </>
  );
}