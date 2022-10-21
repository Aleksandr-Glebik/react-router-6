import React from "react"
import { Routes, Route, Link } from 'react-router-dom'

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
            <Routes>
                <Route path={'contacts'} element={<p>Our contact</p>} />
                <Route path={'team'} element={<p>Our team</p>} />
            </Routes>
        </div>
    )
}

export default AboutPage