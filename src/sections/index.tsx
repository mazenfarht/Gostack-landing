import ClientsLogos from "./section5/ClientsLogos";
import Footer from "./footer/Footer";
import HeroSection from "./section1/HeroSection";
import Navbar from "./navbar/Navbar";
import Partners from "./Partners";
import Section2 from "./section2";
import Section3 from "./section3";
import MainOffice from "./section6/WorldMap";
import ContactSection from "./section7/ContactSection";
import WhyUs from "./WhyUs";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientsLogos />
      <Section2 />
      <Partners />
      <Section3 />
      <WhyUs />
      <MainOffice />
      <ContactSection />
      <Footer />
    </div>
  );
}
