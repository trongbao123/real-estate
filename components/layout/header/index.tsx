import useHeader from '@/hooks/useHeader';
import CloseIcon from '@/icons/CloseIcon';
import DrawerIcon from '@/icons/DrawerIcon';
import Logo from '@/icons/logo';
import LogoHeader from '@/icons/LogoHeader';
import SearchIcon from '@/icons/SearchIcon';
import React from 'react'
import DrawerComponent from '../components/Drawer';

export default function Header(props: any) {
    const {
        navItems
    } = props || {};

    return (
        <header className="hidden md:block md:absolute md:top-0 md:left-0 md:right-0 w-full md:z-[10000]">
            <div className='container mx-auto flex justify-between pt-[30px] px-[20px]'>
                <div className='pt-[10px]'>
                    <LogoHeader />
                </div>
                <ul className='flex pt-[30px]'>
                    {
                        navItems.map((item: any, index: number) => (
                            <li
                                key={index}
                                className={`pl-[20px] transition-colors duration-300 cursor-pointer text-white text-[16px]`}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
