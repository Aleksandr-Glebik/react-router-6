import React from "react"
import { Link, Outlet } from "react-router-dom"

const Loyout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Blog</Link>
            <Link to="/about">About</Link>
        </header>
        <main className="container">
            <Outlet />
        </main>
        <footer>
            <a target="_blank" rel="noreferrer" href="https://github.com/Aleksandr-Glebik">Glebik A.A. 2022</a>
        </footer>
        </>

    )
}

export default Loyout