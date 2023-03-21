import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../public/footerLogo.png";
const Footer = () => {
  return (
    <div className="footer-bg space-y-4 md:space-y-3">
      <div className="flex flex-col md:gap-5 md:mx-16 md:flex-row items-center md:items-start space-y-5 md:space-y-0 font-headline">
        {/* Profile */}
        <div className="hidden md:flex flex-col flex-1">
          <Image src={footerLogo} alt="logo" width={60} />
          <p className="text-light lightText w-1/2">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        {/* Company */}
        <div className="hidden md:block space-y-3">
          <p className="text-light text-base font-textline">Company</p>
          <ul className="flex flex-col gap-2 text-light lightText text-left">
            <Link href="/">Events</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Join US</Link>
          </ul>
        </div>
        <div className="selection md:hidden">
          <select className="select">
            <option value="">Company</option>
          </select>
        </div>
        {/* About */}
        <div className="hidden md:block space-y-3">
          <p className="text-light text-base font-textline">About</p>
          <ul className="flex flex-col gap-2 text-light lightText text-left">
            <Link href="/">Project</Link>
            <Link href="/">Mission</Link>
            <Link href="/">Services</Link>
            <Link href="/">Our Story</Link>
          </ul>
        </div>
        <div className="selection md:hidden">
          <select className="select">
            <option value="">About</option>
          </select>
        </div>
        {/* Contact Us */}
        <div className="hidden md:block text-right">
          <p className="text-light text-base font-textline mb-3">Contact Us</p>
          <p className="text-light lightText">traveling@gol.com</p>
          <p className="text-light lightText">123/CA, Las Vegas</p>
        </div>
        <div className="selection md:hidden">
          <select className="select">
            <option value="">Contact Us</option>
          </select>
        </div>
      </div>
      <div className="py-2 center md:mx-16 md:justify-start md:text-left gap-3">
        {/* Social Links */}
        <Link className="links" href="/">
          <Image src="/assets/footer/fb.svg" alt="" width={25} height={25} />
        </Link>
        <Link className="links" href="/">
          <Image
            src="/assets/footer/twitter.svg"
            alt=""
            width={25}
            height={25}
          />
        </Link>
        <Link className="links" href="/">
          <Image
            src="/assets/footer/linkedin.svg"
            alt=""
            width={25}
            height={25}
          />
        </Link>
        <Link className="links" href="/">
          <Image
            src="/assets/footer/instagram.svg"
            alt=""
            width={25}
            height={25}
          />
        </Link>
      </div>
      <hr className="mx-4" />
      <p className="text-light text-xs font-light font-headline text-center pb-2">
        Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
