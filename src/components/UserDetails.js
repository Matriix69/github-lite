import React, { useEffect, useState } from "react";
import { ReactComponent as Shared } from "../assets/shared.svg";
import { ReactComponent as Provate } from "../assets/provate.svg";
import RepoDetails from "./RepoDetails";
import SearchPrompt from "./Prompt";
import Pagination from "./Pagination";

const UserDetails = ({ user, repo }) => {
    const { avatar_url, name, html_url, login, followers, following } = user;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const getCurrentPageData = () => {
        const currentPageData = repo.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        return currentPageData;
    };

    useEffect(() => {
        if(currentPage !== 1 ) setCurrentPage(1)
    }, [user])

    return (
        <div className="max-width mx-auto px-6 my-10">
            <div className="grid lg:grid-cols-[320px_1fr] gap-20 items-start">
                <div className="flex flex-col items-center lg:items-start">
                    <img src={avatar_url} className="bg-gray-200 h-[280px] w-[280px] rounded-full mb-7 object-cover" />
                    <div className="font-seimbold text-[26px] mb-3">{name}</div>
                    <a target="_blank" href={html_url} className="mb-6 block text-[18px] accent">
                        {login}
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                            <Shared />
                            <div>{followers} followers</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Provate />
                            <div>{following} following</div>
                        </div>
                    </div>
                </div>

                {repo.length ? (
                    <div>
                        <h2 className="font-semibold mb-7 text-2xl lg:text-[32px]">Repositories ({repo?.length})</h2>
                        <div className="grid gap-6">
                            {getCurrentPageData().map((details) => (
                                <RepoDetails details={details} />
                            ))}
                        </div>
                        {repo.length > 3 && (
                            <Pagination
                                dataSize={repo.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        )}
                    </div>
                ) : (
                    <SearchPrompt type={"repo"} notFullSreen={true} />
                )}
            </div>
        </div>
    );
};

export default UserDetails;
