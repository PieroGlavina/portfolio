import React from 'react'
import {navList} from "../Costants/Costant.js";

const NavBar = () => {
    return (
        <nav>
            <div className="p-5 mx-8  flex justify-between ">

                <a className="cursor-pointer" href="/">
                    <h1 className="text-2xl font-electrolize ">Piero Glavina</h1>
                </a>

                <div className="flex items-center justify-center">
                    {navList.map((nav) => (
                        <a href={nav.href}>
                            <div
                                key={nav.id}
                                 className="font-electrolize px-7 text-xl cursor-pointer text-gray-400 hover:text-gray-700 transition-all"
                            >
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
