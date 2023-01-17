import { useEffect } from "react";

const useHideScrollBar = () => {
    useEffect(() => {
        document.body.style = "overflow:hidden";
        return () => {
            document.body.style = "overflow:hidden";
        };
    }, []);
};

export default useHideScrollBar;
