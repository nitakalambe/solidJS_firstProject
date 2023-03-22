import { Routes, Route } from "@solidjs/router"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SavedRapo from "./Pages/SavedRapo";
import { createEffect, createSignal } from "solid-js";

const [username, setUsername] = createSignal('ebenezerdon')
const [repos, setRepos] = createSignal([])

createEffect(async () => { 

  const res = // await fetch('https://api.github.com/users')
   await fetch(`https://api.github.com/users/${username()}/repos`)
 // const data = await res.json()
  //console.log(data, 'dada')
  setRepos(await res.json())
  console.log(repos())
 
 })

//import { setName } from "./Pages/Home";
function App() {
 // setName("Mahmuda")


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrapo" element={<SavedRapo />} />
      </Routes>
    </div>
  );
}


export { username, setUsername, repos }
export default App;
