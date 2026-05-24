import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/constants";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p className="copy copy--larger">Links</p>
      <div className="footer__container">
        {FOOTER_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            <Image
              src={link.icon}
              alt={link.alt}
              height={link.dimensions.height}
              width={link.dimensions.width}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}
