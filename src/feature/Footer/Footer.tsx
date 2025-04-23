import { Copy } from "../../components/Copy/Copy";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "./constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Copy size="largeBody">Links</Copy>
      <div className={styles.container}>
        {LINKS.map((link) => (
          <Link href={link.href}>
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
