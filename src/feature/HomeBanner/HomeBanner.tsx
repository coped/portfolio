import type { ReactElement } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Terminal } from "../Terminal";
import styles from "./HomeBanner.module.css";
import { Heading } from "../../components/Heading/Heading";

export function HomeBanner(): ReactElement {
  return (
    <Banner className={styles.homeBanner}>
      <Terminal />
      <Heading className={styles.homeHeading}>Dennis Cope</Heading>
    </Banner>
  );
}
