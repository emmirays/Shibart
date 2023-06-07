import Navbar from "../../components/Navbar/nav";
import Footer from "../../components/Footer/footer";
import "../globals.css";

export const metadata = {
  title: "ShibArt",
  description: "Generate The Highest Quality Images With AI And Earn Money",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
