import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'

// Routes
import routes from './routes'

// Components
import Header from './Components/Header/Header'
import PanelAdmin from './Components/PanelAdmin/PanelAdmin'

function App() {
    let router = useRoutes(routes)

    const [hamburgerMenu, setHamburgerMenu] = useState('nav__toggle-icon unclicked')
    const [menuOpen, setMenuOpen] = useState('panel-admin')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenuHandler = () => {
        if (!isMenuOpen) {
            setHamburgerMenu('nav__toggle-icon clicked')
            setMenuOpen('panel-admin menu--open')
            setIsMenuOpen(true)
        } else {
            setHamburgerMenu('nav__toggle-icon unclicked')
            setMenuOpen('panel-admin')
            setIsMenuOpen(false)
        }
    }

    return (
        <div className='app-container'>
            <PanelAdmin menuOpen={menuOpen} openMenuHandler={openMenuHandler} />
            <div className='app-right'>
                <Header hamburgerMenu={hamburgerMenu} openMenuHandler={openMenuHandler} />
                {router}
            </div>
        </div>

    )
}

export default App