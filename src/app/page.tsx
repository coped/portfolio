import Image from "next/image";
import { HomeBanner } from "@/components/HomeBanner/HomeBanner";
import {
  INDEX_ICON_DIMENSION,
  INDEX_PROFILE_IMAGE_DIMENSION,
} from "@/lib/constants";
import work from "@/assets/work.svg";
import Link from "next/link";
import resume from "@/assets/description.svg";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="index__home">
      <HomeBanner />
      <div className="index__content-container">
        <Image
          className="index__rounded-image"
          width={INDEX_PROFILE_IMAGE_DIMENSION}
          height={INDEX_PROFILE_IMAGE_DIMENSION}
          src={process.env.NEXT_PUBLIC_PROFILE_LINK ?? "/404"}
          alt="Dennis Cope in front of his glorious Honda Fit"
          priority
        />
        <div className="hide-on-small-screens">
          <div className="vertical-divider" />
        </div>
        <div className="index__text-container">
          <div className="index__content-row">
            <Image
              src={work}
              alt="Icon representing a suitcase"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <p className="copy--body">
              Software engineer at{" "}
              <Link href={process.env.NEXT_PUBLIC_EMPLOYER_LINK ?? "/404"}>
                {process.env.NEXT_PUBLIC_EMPLOYER_NAME}
              </Link>
            </p>
          </div>
          <div className="index__content-row">
            <Image
              src={resume}
              alt="Icon representing a resume"
              height={INDEX_ICON_DIMENSION}
              width={INDEX_ICON_DIMENSION}
            />
            <p className="copy--body">
              <Link href={process.env.NEXT_PUBLIC_RESUME_LINK ?? "/404"}>
                Resume
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
