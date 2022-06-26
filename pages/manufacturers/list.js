import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layouts/aboutus-layout";

export default function List() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
      <div className="bg-white rounded-3xl py-10 px-4 md:px-8">
        <h2 className="text-black">تامین کنندگان</h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/1n.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/celito.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/celotech.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/cemotech.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/fenghung.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/imerys.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/sh1.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
          <Link href="/manufacturers/test">
            <div className="h-32 w-32 relative cursor-pointer hover:scale-105 duration-200 justify-self-center">
              <Image
                src="/tempImgs/SHHxtc.jpg"
                layout="fill"
                objectFit="cover"
                alt="عبدالهیان"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
