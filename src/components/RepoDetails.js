import React from "react";

const RepoDetails = ({ details }) => {
    const { name, description, html_url } = details;
    return (
        <div className="grid gap-4 px-8 py-6 font-medium bg-white rounded-md">
            <a target="_blank" href={html_url} className="accent text-lg lg:text-2xl">
                <h3> {name} </h3>
            </a>
            {description && <div>{description}</div>}
        </div>
    );
};

export default RepoDetails;
