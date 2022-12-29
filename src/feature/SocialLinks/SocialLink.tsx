import type { ReactElement } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  icon: StaticImageData | any;
  href: string;
  alt: string;
  dimensions: { height: number; width: number };
};
export function SocialLink(props: Props): ReactElement {
  return (
    <Link href={props.href}>
      <Image
        src={props.icon}
        alt={props.alt}
        height={props.dimensions.height}
        width={props.dimensions.width}
      />
    </Link>
  );
}
