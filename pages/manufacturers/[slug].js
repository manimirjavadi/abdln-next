import Image from "next/image";
import Layout from "../../components/layouts/aboutus-layout";

export default function SingleManufacturer() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="mx-auto relative h-60 w-60">
          <Image
            alt="عبدالهیان"
            src="/tempImgs/celotech.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-8 pt-6 pb-2">
          <h1 className="text-xl text-center text-black">نام تامین‌کننده</h1>
        </div>
        <div className="newsContainer pt-5 pb-16 px-4 md:px-16">
          <p>
            تیم تحقیقاتی آئروژل‌ها را با استفاده از میکروسکوپ الکترونیکی روبشی
            گسیل میدانی و تکنیک‌های آزمایشگاهی مشخص کردند و دریافتند که سطوح
            مختلف اکسید گرافن منافذ با اندازه‌های متفاوتی را در آئروژل ایجاد
            می‌کند. آن‌ها دریافتند که افزودن اکسید گرافن باعث افزایش سطح ویژه و
            پایداری حرارتی هیدروژل‌های نانوکامپوزیتی می‌شود. آن‌ها همچنین مشاهده
            کردند که اندازه منافذ هیدروژل‌ها با افزایش غلظت اکسید گرافن کاهش
            می‌یابد. علاوه بر این، آئروژل توسعه‌یافته در این مطالعه دارای قابلیت
            جذب بود ظرفیت 138 میلی‌گرم بر گرم متیلن بلو پس از 250 دقیقه – که یکی
            از بالاترین ظرفیت‌های جذب متیلن بلو گزارش‌شده است. درنهایت، محققان
            مشاهده کردند که هیدروژل‌های جدید حدود 90 درصد از ظرفیت جذب خود را
            حتی پس از 9 دوره استفاده و بازسازی حفظ می‌کنند.
          </p>
        </div>
      </div>
    </main>
  );
}

SingleManufacturer.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
