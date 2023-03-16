import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="cardFrame footer-bg">
      <div className="flex flex-col items-center ">
        {/* Company */}
        <select>
          <option value="">Company</option>
        </select>
        {/* About */}
        <select>
          <option value="">About</option>
        </select>
        {/* Contact Us */}
        <select>
          <option value="">Contact Us</option>
        </select>
      </div>
      <div>
        {/* Social Links */}
        <Link href="/">
          <Image src="/assets/footer/fb.svg" alt="" width={20} height={20} />
        </Link>
        <Link href="/">
          <Image
            src="/assets/footer/twitter.svg"
            alt=""
            width={20}
            height={20}
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/footer/linkedin.svg"
            alt=""
            width={20}
            height={20}
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/footer/instagram.svg"
            alt=""
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
