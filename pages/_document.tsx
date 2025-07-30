import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content="ALX Listing App - Modern property listings with beautiful imagery" />
        <meta name="keywords" content="property, listings, real estate, ALX, Next.js" />
        <meta name="author" content="Grandson-tech" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
