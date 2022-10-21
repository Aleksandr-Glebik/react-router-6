import React from "react"
import {Link} from 'react-router-dom'

const NoFoundPage = () => {
    return (
        <div className="container">
            <h1>NoFoundPage</h1>
            <p>This page doesn't exist. Go <Link to="/"></Link></p>
        </div>
    )
}

export default NoFoundPage