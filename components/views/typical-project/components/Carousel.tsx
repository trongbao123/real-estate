import IconArrowLeft from "@/icons/IconArrowLeft";
import IconArrowRight from "@/icons/IconArrowRight";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
    [key: string]: any
}
export default function CarouselComponent(props: Props) {

    const {
        carouselData,
        responsive
    } = props || {};

    return (
        <Carousel responsive={responsive} className="mt-[30px] pb-[30px] p-[5px]"
            showDots={true}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            customLeftArrow={
                <button className="absolute top-[40%] left-[40px] z-[10000] w-[50px] h-[50px] bg-[#ffff] rounded-[5px] text-center flex flex-col justify-center items-center">
                    <IconArrowLeft />
                </button>
            }
            customRightArrow={
                <button className="absolute top-[40%] right-[30px] z-[10000] w-[50px] h-[50px] bg-[#ffff] rounded-[5px] text-center flex flex-col justify-center items-center">
                    <IconArrowRight />
                </button>
            }
        >
            {carouselData.map((item: any) => (
                <div className="relative  md:mx-[20px]" key={item?.id}>
                    <Image
                        src={item?.img}
                        className="h-[515px] w-[400px] md:w-[500px]"
                        alt="image"
                    />
                    <div className="md:ml-[0px] md:mr-[30px] h-[515px] w-[400px] md:w-[347px] lg:w-[473px] xl:w-[387px] 2xl:w-[473px] absolute inset-0 bg-gradient-to-b from-transparent to-[#004274]"></div>
                </div>
            ))}
        </Carousel>
    )
}
