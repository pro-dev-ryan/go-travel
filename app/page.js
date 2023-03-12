import Image from "next/image";
import plane from "../public/assets/hero/Group 1000003659.png";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Image
        className="hidden absolute -z-20 top-40 pt-40"
        src={plane}
        alt="travel"
      />
    </main>
  );
}
