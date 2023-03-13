import Image from "next/image";
import plane from "../public/assets/hero/Group 1000003659.png";
import Hero from "./components/Hero";
import SearchFlights from "./components/SearchFlights";

export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <Image
        className="hidden absolute -z-20 top-40 pt-40"
        src={plane}
        alt="travel"
      />
      <SearchFlights />
    </main>
  );
}
