import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";

const Header = ({ getUser }) => {
    return (
        <div className="bg-accent h-[72px] w-full">
            <div className="max-width mx-auto flex items-center gap-5 h-full px-6">
                <Logo />
                <div className="h-[40px] rounded-md flex items-center gap-3 bg-white overflow-hidden w-full max-w-[500px] px-5">
                    <Search />
                    <input
                        className="h-full w-full outline-none border-none border-hidden"
                        placeholder="Enter GitHub username"
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                e.preventDefault();
                                getUser(e.target.value);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
