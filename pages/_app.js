import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <NextNProgress color="#D98E28" />
      <Component {...pageProps} />
    </>
  );
}
