import React from 'react'
import {navList} from "../Costants/Costant.js";

const NavBar = () => {
    return (
        <nav>
            <div className="p-5 mx-8  flex justify-between ">

                <h1 className="text-2xl font-bold ">Piero Glavina</h1>

                <div className="flex items-center justify-center">
                    {navList.map((nav) => (
                        <a href={nav.href}>
                            <div key={nav.id}
                                 className="px-7 text-xl cursor-pointer text-gray-400">
                                <p>//  {nav.title}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    )
}
export default NavBar
