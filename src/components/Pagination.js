import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

const Pagination = ({ dataSize, pageSize, currentPage, setCurrentPage }) => {
    const handleClick = (newPage) => {
        setCurrentPage(newPage);
    };

    const pageButtons = 3;
    const pages = [];
    let start = currentPage - Math.floor(pageButtons / 2);
    let end = currentPage + Math.floor(pageButtons / 2);

    if (start < 1) {
        end += 1 - start;
        start = 1;
    }

    const totalPages = Math.ceil(dataSize / pageSize);

    if (end > totalPages) {
        start -= end - totalPages;
        end = totalPages;
    }
    if (start < 1) start = 1;

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className="flex flex-col items-center sm:flex-row justify-end gap-4 sm:gap-6 pt-8 pb-12 ml-auto">
            <div>
                {(currentPage - 1) * pageSize + 1} - {currentPage * pageSize} of {totalPages * pageSize} items
            </div>
            <ul className="flex items-center gap-4 ">
                <li className="flex items center">
                    <button disabled={!(currentPage > 2)} onClick={() => handleClick(currentPage - 1)}>
                        <ArrowLeft />
                    </button>
                </li>

                {currentPage !== 1 && (
                    <>
                        <li>
                            <button onClick={() => handleClick(1)}>1</button>
                        </li>
                        <span>...</span>
                    </>
                )}
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={`${currentPage === page ? "bg-accent text-white" : ""} px-2 py-1 rounded-md`}
                            onClick={() => handleClick(page)}
                            disabled={currentPage === page}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                {currentPage !== totalPages && (
                    <>
                        <span>...</span>
                        <li>
                            <button onClick={() => handleClick(totalPages)}>{totalPages}</button>
                        </li>
                    </>
                )}
                <li className="flex items center">
                    <button disabled={!(currentPage < totalPages - 1)} onClick={() => handleClick(currentPage + 1)}>
                        <ArrowRight />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
