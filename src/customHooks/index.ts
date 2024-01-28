import {useEffect, useState} from "react";

export function useIsMobileDevice() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    }, []);

    return isMobile;
}

