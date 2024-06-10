import DrawerComponent from "@/components/layout/components/Drawer"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import useHeader from "@/hooks/useHeader"
import CloseIcon from "@/icons/CloseIcon"
import DrawerIcon from "@/icons/DrawerIcon"
import Logo from "@/icons/logo"
import SearchIcon from "@/icons/SearchIcon"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const {
        active,
        navItems,
        handleActive,
        showDrawer,
        placement,
        onClose,
        openDrawer
    } = useHeader({});
    return (
        <html lang="en">
            <div className="md:hidden bg-[#1868B3] w-full h-[80px] relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[14px] font-[600] text-white w-[330px] sm:w-full pt-3">
                    CÔNG TY CỔ PHẦN THƯƠNG MẠI TRỰC TUYẾN AN THỊNH PHÁT
                </div>
            </div>
            <div
                className={`md:hidden ${openDrawer === true ? "bg-[#ffff] absolute z-[100000]  w-full h-[100px]" : 'bg-[#d7d8da]  w-full h-[100px]'}  flex flex-col justify-center  text-center`}>
                <div className="flex justify-around text-center ">
                    <div >
                        <Logo />
                    </div>
                    <div className="flex pt-[13px]">
                        <button className="w-[18px] h-[18px] text-[#828282] pt-[5px] mr-[20px]">
                            <SearchIcon />
                        </button>
                        {openDrawer === true ? <button className="w-[24px] h-[24px] pt-[2px] text-[#1868B3]" onClick={onClose}>
                            <CloseIcon />
                        </button> :
                            <button className="w-[24px] h-[18px] text-[#1868B3]" onClick={showDrawer}>
                                <DrawerIcon />
                            </button>
                        }
                    </div>
                </div>
            </div>

            <DrawerComponent
                active={active}
                openDrawer={openDrawer}
                placement={placement}
                onClose={onClose}
            />
            <Header navItems={navItems} />
            <body>{children}</body>
            <Footer />
        </html>
    )
}