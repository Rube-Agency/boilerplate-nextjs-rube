import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rube Agency - Boilerplate</title>
        <link rel="shortcut icon" href="/img/rube_icon.png" />
        <link rel="apple-touch-icon" href="/img/rube_icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Initial cover for creating nextjs projects from Rube agency"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
