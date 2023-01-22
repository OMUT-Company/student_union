import {useEffect, useState} from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    const checkWindowSize = () =>{
        const windowSize = window.innerWidth
        switch (windowSize) {
            case 1440:
                return "xxl"
            case 1024:
                return "xl"
            case 768:
                return "lg"
            case 425:
                return "md"
            case 375:
                return "sm"
            case 320:
                return "xsm"
            default:
                return "xxxl"
        }
    }

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,

            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    windowSize.displaySize = checkWindowSize()

    return windowSize;
}