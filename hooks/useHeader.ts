import { useCallback, useState } from "react"
import type { DrawerProps } from 'antd';

const useHeader = (options: any) => {
    const [active, setActive] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const navItems = [
        'TRANG CHỦ',
        'VỀ CHÚNG TÔI',
        'DỰ ÁN',
        'BLOG',
        'LIÊN HỆ'
    ];
    const onClose = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const showDrawer = useCallback(() => {
        setOpenDrawer(true);
    }, []);

    const handleActive = useCallback((index: number) => {
        setActive(index);
    }, [setActive]);

    return {
        active,
        navItems,
        handleActive,
        showDrawer,
        placement,
        onClose,
        openDrawer
    }
}

export default useHeader;