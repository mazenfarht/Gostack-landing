import ClientsLogos from "./ClientsLogos";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Section2 from "./section2";
import Section3 from "./section3";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientsLogos />
      <Navbar />
      <HeroSection />
      <ClientsLogos />
      <Section2 />
      <Partners />
      <Partners />
      <Section3 />
      <Footer />
    </div>
  );
}
