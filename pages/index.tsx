import Image from "next/image";
import Seo from "@/components/common/seo";
import Image1 from "@/assets/img1.jpeg";
import Search from "@/components/views/search";
import TypicalProject from "@/components/views/typical-project";
import carouselData from "@/data/carouselData";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import RootLayout from "./layout";
import Layout from "@/components/layout";

type Props = {
  [key: string]: any
}
const Home: NextPageWithLayout = (props: Props) => {
  const { carouselData, banner } = props || {};

  return (
    <main>
      <div className="relative">
        <div className="absolute top-[30px] left-[5px] right-0 md:top-[188px] md:left-[250px] md:right-[220px] lg:left-[220px] lg:right-[200px] 2xl:left-[250px] text-[#ffff] z-[10000]">
          <div className="flex flex-col text-center">
            <h1 className="text-[40px] lg:text-[70px] font-[600]">BẤT ĐỘNG SẢN</h1>
            <h3 className="text-[30px] lg:text-[40px] font-[600]">L I N K I N V E S T</h3>
            <button className="bg-[#F7941D] text-[#FFFF] mt-[10px] w-[150px] h-[40px] mx-auto cursor-pointer">
              TÌM HIỂU NGAY
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[700px] md:h-[500px] lg:h-[600px] 2xl:h-[620px] bg-[#004274] opacity-[50%] z-[1000] " />
        <div className="absolute z-1 w-full h-[700px] md:h-[500px] lg:h-[600px]  left-0 2xl:h-[620px] 2xl:top-[0px] bg-cover bg-no-repeat">
          <Image
            src={banner}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
      </div>
      <Search />
      <TypicalProject carouselData={carouselData} />
    </main>
  );
}
Home.getInitialProps = async () => {
  return {
    carouselData: carouselData,
    banner: Image1
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;