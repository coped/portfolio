import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeBanner } from "../src/feature/HomeBanner";
import { Copy } from "../src/components/Copy/Copy";
import { VerticalDivider } from "../src/components/VerticalDivider/VerticalDivider";
import { HideOnSmallScreens } from "../src/components/HideOnSmallScreens/HideOnSmallScreens";
import work from "../src/assets/work.svg";
import resume from "../src/assets/description.svg";
import { INDEX_ICON_DIMENSION } from "../src/lib/constants";
import { Footer } from "../src/feature/Footer";

export default function Home(): ReactElement {
  return (
    <div className="index__home">
      <Head>
        <title>Dennis Cope | cope.sh</title>
      </Head>
      <HomeBanner />
      <div className="index__content-container">
        <Image
          className="index__rounded-image"
          width="338"
          height="338"
          src={process.env.NEXT_PUBLIC_PROFILE_LINK ?? "/404"}
          alt="Dennis Cope in front of his glorious Honda Fit"
          priority
        />
        <HideOnSmallScreens>
          <VerticalDivider />
        </HideOnSmallScreens>
        <div className="index__text-container">
          <div className="index__content-row">
            <Image
              src={work}
              alt="Icon representing a resume"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <Copy size="body">
              Software engineer at{" "}
              <Link href={process.env.NEXT_PUBLIC_EMPLOYER_LINK ?? "/404"}>
                {process.env.NEXT_PUBLIC_EMPLOYER_NAME}
              </Link>
            </Copy>
          </div>
          <div className="index__content-row">
            <Image
              src={resume}
              alt="Icon representing a resume"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <Copy size="body">
              <Link href={process.env.NEXT_PUBLIC_RESUME_LINK ?? "/404"}>
                Resume
              </Link>
            </Copy>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
