import React from 'react'
import { useRoutes } from 'react-router-dom'

// Routes
import routes from './routes'

// Components
import Header from './Components/Header/Header'
import HamburgerMenu from './Components/Shared/HamburgerMenu/HamburgerMenu'

function App() {
    let router = useRoutes(routes)

    return (
        <div className='app-container'>
            <HamburgerMenu />
            <div className='app-right'>
                <Header />
                {router}
            </div>
        </div>
    )
}

export default App