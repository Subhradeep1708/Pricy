import { Plane } from "lucide-react"
import MobileSidebar from "../components/MobileSidebar"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {

    const nav = [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'About'
        },
        {
            id: 3,
            name: 'More'
        },
    ]

    return (
        <div className="flex justify-between dark:bg-card bg-secondary p-6 backdrop-blur-lg rounded-b-l shadow-lg ">
            <div className="flex gap-2 items-center">
                <Plane />
                <h1 className="font-bold text-xl text-">Pricy</h1>
            </div>
            <div className="flex gap-8">
                <div className="hidden md:flex gap-6 ">
                    {nav.map(nav =>
                        <div key={nav.id}
                            className="cursor-pointer hover:text-button-light ease-in-out duration-150"
                        >{nav.name}</div>
                    )}
                </div>
                {/* <div className="bg-white/10 rounded-full"> */}

                    <ThemeToggle />
                {/* </div> */}
                <div className="md:hidden flex items-center">
                    <MobileSidebar />
                </div>
            </div>
        </div>
    )
}

export default Navbar
