import Image from "next/image";
import plane from "../public/assets/hero/Group 1000003659.png";
import Hero from "./components/Hero";
import Package from "./components/Package";
import SearchFlights from "./components/SearchFlights";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Image
        className="hidden absolute -z-20 top-40 pt-40"
        src={plane}
        alt="travel"
      />
      <SearchFlights />
      <Package />
    </main>
  );
}
