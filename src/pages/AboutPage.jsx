import React from "react"
import { Outlet, Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div>
            <h1>AboutPage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, et error nostrum distinctio sunt illum quaerat itaque nesciunt vitae suscipit!</p>
            <ul>
                <li>
                    <Link to={'contacts'}>Our contact</Link>
                </li>
                <li>
                    <Link to={'team'}>Our team</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AboutPage