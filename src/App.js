import React from 'react'
import { useRoutes } from 'react-router-dom'

// Routes
import routes from './routes'

// Components
import Header from './Components/Header/Header'

function App() {
    let router = useRoutes(routes)

    return (
        <>
            <Header />
            {router}
        </>
    )
}

export default App