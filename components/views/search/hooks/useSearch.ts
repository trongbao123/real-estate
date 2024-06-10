import { useCallback, useState } from "react";

const useSearch = () => {
    const [active, setActive] = useState<number>(0);

    const handleActive = useCallback((buttonNumber: number) => {
        setActive(buttonNumber);
    }, [setActive, active]);

    return {
        active,
        handleActive
    }
}

export default useSearch;