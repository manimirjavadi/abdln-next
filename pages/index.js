import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import MainLayout from "../components/layouts/main-layout";
import { useEffect } from "react";
import { Intro } from "../components/Home/Intro";
import { Header } from "../components/UI/Header";

export default function Home() {
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName("fp-watermark")
    );

    for (let element of allWithClass) {
      element.remove();
    }
  }, []);

  const onLeave = (origin, destination, direction) => {
      console.log("onLeave", { origin, destination, direction });
      // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    },
    handleChangeColors = () => {
      const newColors =
        sectionsColor[0] === "yellow"
          ? [...originalColors]
          : ["yellow", "blue", "white"];
      return setsectionsColor(newColors);
    },
    handleAddSection = () => {
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });
      return setfullpages([...fullpages]);
    },
    handleRemoveSection = () => {
      const newPages = [...fullpages];
      newPages.pop();
      return setfullpages(newPages);
    },
    moveSectionDown = () => {
      return fullpage_api.moveSectionDown();
    };

  return (
    <div>
      <Head>
        <title>عبداللهیان</title>
        <meta name="description" content="وبسایت رسمی عبداللهیان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactFullpage
        navigation
        onLeave={onLeave}
        scrollBar={false}
        render={() =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro />
              </div>
              <div className="section">section 2</div>
            </ReactFullpage.Wrapper>
          )
        }
      ></ReactFullpage>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
