import React from "react"
import { Outlet, NavLink } from "react-router-dom"

const Layout = () => {
    const setActive = ({isActive}) => isActive ? 'active-link' : ''
    // const setActive = ({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})
    return (
        <>
        <header>
            {/* <NavLink to="/" style={setActive}>Home</NavLink>
            <NavLink to="/posts" style={setActive}>Blog</NavLink>
            <NavLink to="/about" style={setActive}>About</NavLink> */}
            <NavLink to="/" className={setActive}>Home</NavLink>
            <NavLink to="/posts" className={setActive}>Blog</NavLink>
            <NavLink to="/about" className={setActive}>About</NavLink>
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

export default Layout