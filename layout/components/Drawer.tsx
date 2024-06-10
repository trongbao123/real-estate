import React from 'react'
import Drawer from 'antd/lib/drawer';
import IconFaceBook from '@/icons/IconFaceBook';
import dataMobileHeaderDrawer from '@/data/header';
export default function DrawerComponent(props: any) {
    const {
        active,
        openDrawer,
        placement,
        onClose
    } = props || {};
    return (
        <div className="md:hidden  absolute top-0">
            <Drawer
                styles={{ wrapper: { boxShadow: 'none' } }}
                placement={placement}
                width={300}
                zIndex={10000}
                size="default"
                style={{ marginTop: '120px' }}
                onClose={onClose}
                open={openDrawer}
                closable={false}
                rootClassName=":where(.css-dev-only-do-not-override-3rel02).ant-drawer-right>.ant-drawer-content-wrapper shadow-none"
            >
                <div className="flex flex-col">
                    <ul>
                        {
                            dataMobileHeaderDrawer.map((item: any, index: number) => {
                                return <li key={item} className="pl-[5px] transition-colors duration-300 cursor-pointer  font-[400] flex pb-[20px]">
                                    {item.icon}
                                    <span className="pl-[20px] text-[12px] md:text-[16px]">{item.name}</span>
                                </li>
                            })
                        }
                    </ul>
                    <div className=" fixed bottom-2 justify-center items-center">
                        <span className=" mx-[55px] text-[16px] font-[400]">Kết nối với chúng tôi</span>
                        <div className="mt-[15px] mx-[30px]">
                            <IconFaceBook />
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}
