import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Lora } from "@next/font/google";
import "../styles/reset.css";
import "../styles/app.css";

const font = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="description" content="Dennis Cope's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`app__main ${font.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
