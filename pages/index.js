import Head from "next/head";
import MainLayout from "../components/layouts/main-layout";
import { Intro } from "../components/Home/Intro";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function Home() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Head>
        <title>عبداللهیان</title>
        <meta name="description" content="وبسایت رسمی عبداللهیان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={SectionStyle}>
            <Intro />
          </FullpageSection>

          <FullpageSection style={SectionStyle}>
            <h1>صفحه دوم</h1>
          </FullpageSection>

          <FullpageSection style={SectionStyle}>
            <h1>صفحه سوم</h1>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
