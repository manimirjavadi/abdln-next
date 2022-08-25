import React from "react";
import AboutUsLayout from "../../components/layouts/aboutus-layout";
import { TheForm } from "../../components/Footer/TheForm";
import { getAboutus } from "../../utils/wordpress";

export default function AboutUs({ aboutus }) {
  const iconOrange = {
    hidden: {
      pathLength: 0,
      fill: "rgba(217, 142, 40, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(217, 142, 40, 1)",
    },
  };

  const iconBlue = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 9, 87, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(0, 9, 87, 1)",
    },
  };

  return (
    <main dir="rtl" className="h-full w-full">
      <div className="max-w-5xl mx-auto w-full">
        <div className="min-h-[600px] mb-6 bg-white/50 rounded-3xl px-6 py-10">
          <TheForm />
        </div>
      </div>
    </main>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <AboutUsLayout>{page}</AboutUsLayout>;
};

export async function getStaticProps({ params }) {
  const aboutusArray = await getAboutus(1);
  const aboutus = aboutusArray[0];

  return {
    props: {
      aboutus,
    },
    revalidate: 10,
  };
}
