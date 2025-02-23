import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navigation";


export const metadata = {
  title: "Arts Chic | Home",
  description: "Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{fontFamily:"'Open Sans', sans-serif"}}
      >
        <link rel="icon" href="/Arts_Chic_Logo.ico" sizes="any" />

        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
