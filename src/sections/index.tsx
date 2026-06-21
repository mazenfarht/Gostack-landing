import ClientsLogos from "./ClientsLogos/ClientsLogos";
import Footer from "./footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import Section2 from "./section2";
import Section3 from "./section3";
import MainOffice from "./WorldMap/WorldMap";
import ContactSection from "./ContactSection/ContactSection";
import Partners from "./Partners/Partners";
import WhyUs from "./WhyUs/WhyUs";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section2 />
      <ClientsLogos />
      <Section3 />
      <Partners />
      <WhyUs />
      <MainOffice />
      <ContactSection />
      <Footer />
    </div>
  );
}
