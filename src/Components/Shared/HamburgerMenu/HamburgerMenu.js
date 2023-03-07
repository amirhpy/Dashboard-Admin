import React, { useState } from 'react';

// Components
import PanelAdmin from '../../PanelAdmin/PanelAdmin';

const HamburgerMenu = () => {
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
        <>
            <PanelAdmin menuOpen={menuOpen} />
            <div className={hamburgerMenu} onClick={openMenuHandler}>
                <div className='nav_toggle-line'></div>
            </div>
        </>
    );
};

export default HamburgerMenu;