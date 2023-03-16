import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-bg space-y-4">
      <div className="flex flex-col items-center cardPlate ">
        {/* Company */}
        <div className="selection">
          <select className="select">
            <option value="">Company</option>
          </select>
        </div>
        {/* About */}
        <div className="selection">
          <select className="select">
            <option value="">About</option>
          </select>
        </div>
        {/* Contact Us */}
        <div className="selection">
          <select className="select">
            <option value="">Contact Us</option>
          </select>
        </div>
      </div>
      <div className="py-2 center gap-3">
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
