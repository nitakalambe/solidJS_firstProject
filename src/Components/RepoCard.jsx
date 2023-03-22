import { setSavedRapos, savedRepos } from "../Pages/SavedRapo";

const savedRapo = (repo) => {
    setSavedRapos([repo, ...savedRepos()])
    localStorage.setItem("savedRepo", JSON.stringify(savedRepos()))
}
const unSavedRapo = (repoId) => {
    const nextRepos = savedRepos()?.filter(item=>item.id !==repoId)
    setSavedRapos(nextRepos)
    localStorage.setItem("savedRepo", JSON.stringify(savedRepos()))
}
const repoIsSaved = (repoId) => {
    const repo = savedRepos()?.filter(item => item.id === repoId)
    return repo?.length > 0
}

function RepoCard(props) {
    return (
        <div class="card container mb-2 border-2">
            <div class="card-header mb-2 bg-slate-50 p-2">
                <span class="ml-5">&#11088; stars: {props.repo.stargazers_count} </span>
            </div>
            <div class="card-body ml-5 mb-2">
                <a href={props.repo.html_url} target="_blank" rel="noreferrer" class="text-decoration-none">
                    <strong>{props.repo.owner?.login}</strong> / {props.repo.name}
                </a>
                <p class="card-text mb-2">{props.repo.description}</p>
                { repoIsSaved(props.repo.id) 
                    ? (
                        <button class="border-2 p-1 w-20 mb-2 bg-red-700 text-white" onClick={()=>unSavedRapo(props.repo.id)}> Unsave</button>
                    ) : 
                    (
                        <button class="border-2 p-1 w-20 mb-2 bg-green-700 text-white" onClick={()=>savedRapo(props.repo)}>
                        Save</button>
                    )
                }
            </div>
        </div>
    )
}

export default RepoCard;