import Image from "next/image";
import plane from "../public/assets/hero/Group 1000003659.png";
import Contact from "./components/Contact";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import Island from "./components/Island";
import Package from "./components/Package";
import SearchFlights from "./components/SearchFlights";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Image
        className="hidden md:block absolute -z-20 md:top-5 top-40 pt-40"
        src={plane}
        alt="travel"
      />
      <SearchFlights />
      <Package />
      <Island />
      <Contact />
      <Testimonials />
      <GetApp />
    </main>
  );
}
