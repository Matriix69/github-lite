import { ReactComponent as Search } from "../assets/search_alt.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Repo } from "../assets/rep.svg";

const SearchPrompt = ({ type, notFullSreen }) => {
    const types = {
        search: {
            icon: <Search />,
            title: "Start with searching a GitHub user",
        },
        user: {
            icon: <User />,
            title: "User not found",
        },
        repo: {
            icon: <Repo />,
            title: "Repository list is empty",
        },
    };

    return (
        <div className={` flex items-center justify-center ${!notFullSreen ? "min-h-screen" : "min-h-full"} `}>
            <div className={`flex flex-col items-center justify-center h-full ${!notFullSreen ? "mt-[-72px]" : ""}`}>
                <div className="mb-6">{types[type]?.icon}</div>
                <div className="max-w-[210px] mx-auto text-center text-[#808080] text-base sm:text-[22px] leading-6 sm:leading-8">
                    {types[type]?.title}
                </div>
            </div>
        </div>
    );
};

export default SearchPrompt;
