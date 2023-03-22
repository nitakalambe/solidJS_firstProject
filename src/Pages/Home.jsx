import { createSignal, For } from "solid-js";
import { repos, setUsername, username } from '../App'
import RepoCard from "../Components/Repocard";


const [name, setName] = createSignal("Nita")

function Home () {
    const refetchWithUsername = (event) => {
        console.log('kk')
        event.preventDefault()
        const userNameInput = document.querySelector('#userNameInput');
      //  userNameInput.querySelector('#userNameInput') as HTMLInputElement;

console.log('userNameInput', userNameInput.value)

        //const userNameInput = document.querySelector('#userNameInput'); as HTMLElement
        setUsername(userNameInput.value)
    }

    
    return (
        <div class="m-10">
            <form class="mb-3" onSubmit={() => refetchWithUsername(event)}>
                <input type="text" class="p-1 align-middle border-2" id="userNameInput" required placeholder="Search here..."/>
                <button class="button w-20 border-2 p-1 ml-2 text-white bg-black">Fetch</button>
            </form>
            <h1 class="text-3xl text-blue-800 mb-10">Github Repos for {username()}</h1>
            <For each={repos()}>
                {repo => 
                // <p>{repo.forks}</p>
                 <RepoCard repo = { repo } />
                }
            </For>

        </div>
    )
}
export {setName}
export default Home;
