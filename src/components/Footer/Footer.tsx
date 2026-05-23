import Link from "next/link";
import Image from "next/image";
import { LINKS } from "./Footer.constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className="copy--large-body">Links</p>
      <div className={styles.container}>
        {LINKS.map((link) => (
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
    </div>
  );
}
