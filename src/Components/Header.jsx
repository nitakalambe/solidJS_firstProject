
import { NavLink } from "@solidjs/router";
import { savedRepos } from "../Pages/SavedRapo";

const Header = () => {
    return (
        <nav class="bg-blue-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <NavLink href="/" class="bg-green-500 p-2 mr-1 text-white" end activeClass="bg-green-500">Home</NavLink>
                <NavLink href="/savedrapo" class="bg-blue-500 p-2 text-white" activeClass="bg-green-500">Saved ~ {savedRepos().length}</NavLink>
               
            </div>
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
        </div>
        </nav>
    )
}

export default Header;