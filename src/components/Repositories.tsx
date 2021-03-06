import React, { useState, useEffect } from 'react';

const Repositories = () => {

    const [repos, setRepos] = useState<any[]>([]);
    const arr: string[] = [];

    useEffect(() => {
        fetchRepos();
    }, []);

    const fetchRepos = async () => {
        let data = await fetch("https://api.github.com/users/Drackin/repos");
        let repositories = await data.json();
        setRepos(repositories);
    }

    return (
        <div className="mobile:min-h-screen space-y-4 w-full flex flex-col text-white justify-center mt-10" id="repositories">
            <h1 className="text-4xl text-center font-jetbrains">Repositories</h1>

            <div className="lg:flex justify-center items-center lg:flex-wrap gap-3 mobile:space-y-5 m-0 p-0 mobile:w-[20rem] w-[85%] min-h-1/3 self-center">
                {repos.map((repo, i) => (
                    <div key={i} className="rounded-xl select-none w-[30%] mobile:w-full">
                        <a href={`https://github.com/Drackin/${repo.name}`} className="h-full w-full">
                            <img src={`https://github-readme-stats.vercel.app/api/pin/?username=Drackin&repo=${repo.name}&theme=dark`} height="100" alt={repo.name} className="h-full" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Repositories
