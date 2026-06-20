import ClientsLogos from "./ClientsLogos";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Section2 from "./section2";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientsLogos />
      <Section2 />
      <Partners />
      <Footer />
    </div>
  );
}
