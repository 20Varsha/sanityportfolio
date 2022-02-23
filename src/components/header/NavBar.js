import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
  
        <header className="bg-black-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    {/* <NavLink to="/" exact
                        activeClassName="text-white"
                        className="inflex-flex items-center mr-4 text-res-400 hover:text-pink-800 text-xl fond-bold  tracking-widest py-7 px-3">
                        Home
                    </NavLink> */}
                    <NavLink to="post"
                        className="inflex-flex items-center mr-4 text-res-100 hover:text-pink-800 text-xl fond-bold tracking-widest py-7 px-3"
                        activeClassName="text-red-100 bg-red-700"

                    >
                        Post
                    </NavLink>
                    {/* <NavLink to="/project"
                        className="inflex-flex items-center mr-4 text-res-100 hover:text-pink-800 text-xlfond-bold tracking-widest py-7 px-3"
                        activeClassName="text-pink-100 bg-red-700"
                    >
                        Project
                    </NavLink> */}
                    {/* <NavLink to="/singlepost"
                        className="inflex-flex items-center mr-4 text-res-100 hover:text-lightgreen-800 text-xl fond-bold cursive tracking-widest py-7 px-3"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        SinglePost
                    </NavLink> */}
                </nav>
            </div>
        </header>
      
    )
}


