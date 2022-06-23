import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import MainLayout from "../components/layouts/main-layout";
import { useEffect, useState } from "react";
import { Intro } from "../components/Home/Intro";
import { Header } from "../components/UI/Header";
import { NormalProducts } from "../components/Products/NormalProducts";
import { SpecialProducts } from "../components/Products/SpecialProducts";
import { ManufacturersSection } from "../components/Manufacturers/ManufacturersSection";
import { News } from "../components/News/News";

export default function Home() {
  const [animateManufacturers, setAnimateManufacturers] = useState(false);
  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName("fp-watermark")
    );

    for (let element of allWithClass) {
      element.remove();
    }
  }, []);

  const onLeave = (origin, destination, direction) => {
    if (destination.item?.id === "manufacturers") {
      setAnimateManufacturers(true);
    } else {
      setAnimateManufacturers(false);
    }
  };
  // const handleChangeColors = () => {
  //   const newColors =
  //     sectionsColor[0] === "yellow"
  //       ? [...originalColors]
  //       : ["yellow", "blue", "white"];
  //   return setsectionsColor(newColors);
  // },
  // handleAddSection = () => {
  //   const { length } = fullpages;
  //   fullpages.push({
  //     text: `section ${length + 1}`,
  //     id: Math.random(),
  //   });
  //   return setfullpages([...fullpages]);
  // },
  // handleRemoveSection = () => {
  //   const newPages = [...fullpages];
  //   newPages.pop();
  //   return setfullpages(newPages);
  // },
  // moveSectionDown = () => {
  //   return fullpage_api.moveSectionDown();
  // };

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
              <div className="section">
                <NormalProducts />
              </div>
              <div className="section">
                <SpecialProducts />
              </div>
              <div className="section">
                <News />
              </div>
              <div id="manufacturers" className="section">
                <ManufacturersSection
                  animatorController={animateManufacturers}
                />
              </div>
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
