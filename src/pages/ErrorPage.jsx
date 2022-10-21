import React from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <div className="container">
                <h1>{error.status}</h1>
                <h2>{error.data.message || 'Something goes wrong!'}</h2>
                <h2>{error.data.reason || 'Something goes wrong!'}</h2>
            </div>
        )
    }

    return <div>Something went wrong</div>
}

export default ErrorPage