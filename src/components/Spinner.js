import useHideScrollBar from "../hooks/useHideScrollBar";

const Spinner = () => {
    useHideScrollBar();

    return (
        <div class="flex items-center justify-center h-full fixed inset-0 bg-white z-50 spinner">
            <div class="lds-ring mt-[-72px]">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
