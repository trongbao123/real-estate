
import IconArrowRight from "@/icons/IconArrowRight";
import CarouselComponent from "./components/Carousel";
import useCarousel from "./hooks/useCarousel";
import IconArrowBlue from "@/icons/IconArrowBlue";

type Props = {
    [key: string]: any
}
export default function TypicalProject(props: Props) {
    const {
        carouselData
    } = props || {};

    const {
        responsive
    } = useCarousel();

    return (
        <div className=' w-full h-auto relative z-[1000] top-[250px] md:top-[480px]  lg:top-[600px] bg-[#F6F7F8]'>
            <div className="container mx-auto p-[15px] md:p-0">
                <h1 className="hidden md:block text-[36px] font-[600] text-center  md:pt-[150px]">DỰ ÁN TIÊU BIỂU</h1>
                <div className="md:hidden flex justify-between pt-[20px]">
                    <h1 className=" text-[20px] font-[400]">DỰ ÁN TIÊU BIỂU</h1>
                    <button className="flex flex-row items-center text-[#1868B3] text-[15px]">
                        <span className="text-[15px]">XEM THÊM</span>
                        <div className="text-[5px] ml-[5px] text-[#1868B3]">
                            <IconArrowBlue />
                        </div>
                    </button>
                </div>
                <CarouselComponent
                    responsive={responsive}
                    carouselData={carouselData}
                />
            </div>
        </div>

    )
}
