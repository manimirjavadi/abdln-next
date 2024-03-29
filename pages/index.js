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
import { Footer } from "../components/Footer/Footer";
import {
  getCosmetics,
  getPosts,
  getProducts,
  getSlides,
  getVendors,
} from "../utils/wordpress";

export default function Home({
  slides,
  posts,
  vendors,
  normalProducts,
  specialProducts,
}) {
  const [animateManufacturers, setAnimateManufacturers] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

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

    if (destination.item?.id === "footer") {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  };

  return (
    <div>
      <Head>
        <title>عبدالهیان | تامین کننده مواد شیمیایی و معدنی</title>
        <meta name="description" content="وبسایت رسمی عبدالهیان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hideHeader={hideHeader} />
      <ReactFullpage
        navigation
        onLeave={onLeave}
        scrollBar={false}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Intro slides={slides} />
            </div>
            <div className="section">
              <NormalProducts products={normalProducts} />
            </div>
            {/* <div className="section">
              <SpecialProducts products={specialProducts} />
            </div> */}
            <div className="section">
              <News posts={posts} />
            </div>
            <div id="manufacturers" className="section">
              <ManufacturersSection
                vendors={vendors}
                animatorController={animateManufacturers}
              />
            </div>
            <div id="footer" className="section">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      ></ReactFullpage>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps({ params }) {
  const slides = await getSlides(2);
  const posts = await getPosts(3);
  const vendors = await getVendors(8);
  const normalProducts = await getProducts(3);
  const specialProducts = await getCosmetics(2, 1);

  return {
    props: {
      slides,
      posts,
      vendors,
      normalProducts,
      specialProducts,
    },
    revalidate: 10,
  };
}
