import { useState } from "react";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import Spinner from "./components/Spinner";
import UserDetails from "./components/UserDetails";

function App() {
    const [isFetching, setIsFetching] = useState(false);
    const [noUserFound, setNoUserFound] = useState(false);
    const [user, setUser] = useState(null);
    const [repo, setRepo] = useState([]);

    const getUser = async (username) => {
        if (!username) return;
        setIsFetching(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if (data?.message === "Not Found") {
            if (user) setUser(null);
            setNoUserFound(true);
            setIsFetching(false);
            return;
        }
        setUser(data);

        const rePoResponse = await fetch(data?.repos_url);
        const repoData = await rePoResponse.json();
        setRepo(repoData);
        setIsFetching(false);
        if (noUserFound) setNoUserFound(false);
    };

    return (
        <>
            <Header getUser={getUser} />
            {!user && !noUserFound && <Prompt type={"search"} />}
            {noUserFound && <Prompt type={"user"} />}
            {user && <UserDetails user={user} repo={repo} />}
            {isFetching && <Spinner />}
        </>
    );
}

export default App;
