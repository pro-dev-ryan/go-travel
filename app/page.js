import { Open_Sans, Montserrat, Inter } from "next/font/google";

const open = Open_Sans({
  weight: ["700"],
  subsets: ["latin"],
  variable: ["--font-headline"],
});
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: ["--font-test"],
});
const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: ["--font-regular"],
});

export default function Home() {
  return (
    <main>
      <p className={`${inter.className}`}>Hero</p>
    </main>
  );
}
