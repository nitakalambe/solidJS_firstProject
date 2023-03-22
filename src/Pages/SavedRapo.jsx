//import { Component } from 'solid-js';

import { createSignal, For } from "solid-js";
import RepoCard from "../Components/Repocard";

const reposFromLocalStorage = JSON.parse(localStorage.getItem("savedRepo"))
const [savedRepos, setSavedRapos] = createSignal(reposFromLocalStorage)

const SavedRapo = () => {
    return (
        <div class="m-10">
            <h1 class="text-3xl text-blue-800 mb-10">Your Saved Rapos</h1>
            <For each={savedRepos()}>
                {repo=> <RepoCard repo = {repo} />}
            </For>
        </div>
    )
}
export { setSavedRapos, savedRepos }

export default SavedRapo;