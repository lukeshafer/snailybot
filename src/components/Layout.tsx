import Head from "next/head";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>toxic Man !</title>
        <meta name="description" content="hhhheeeh" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#008000" />
        <meta name="msapplication-TileColor" content="#008000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
