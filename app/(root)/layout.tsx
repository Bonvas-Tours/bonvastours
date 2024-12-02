
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="pt-10">
        {children}
      </div>
      <Footer />
    </main>


  );
}

