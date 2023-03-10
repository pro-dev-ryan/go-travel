import Navbar from "./components/Navbar";
import "./globals.css";
import { Open_Sans, Montserrat, Inter } from "next/font/google";

export const open = Open_Sans({
  subsets: ["latin"],
  variable: ["--font-headline"],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: ["--font-linkline"],
});
export const inter = Inter({
  subsets: ["latin"],
  variable: ["--font-regular"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${open.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className="section">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
