import { Navbar } from "@/components";


export default function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center p24">
        <span className="text-lg">Hola Mundo!!</span>
        {children}
      </main>
    </>
    
  );
}