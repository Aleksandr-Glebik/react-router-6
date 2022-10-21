import React from "react"
import { Outlet } from "react-router-dom"
import CustomLink from './CustomLink'

const Layout = () => {

    return (
        <>
        <header>
            <CustomLink to="/" >Home</CustomLink>
            <CustomLink to="/posts" >Blog</CustomLink>
            <CustomLink to="/about" >About</CustomLink>
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