import Footer from "../components/clients/footer/Footer";
import Navbar from "../components/clients/navbar/Navbar";



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}