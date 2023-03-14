import React from 'react';

// MUI Icon
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SearchIcon from '@mui/icons-material/Search';

import Avatar from '@mui/material/Avatar';

// Image
import avatar from '../../Assets/Images/avatar/avatar-anika-visser.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-search icon-parent'>
                    <SearchIcon className='header__search-icon' />
                </div>
                <div className='header-setting'>
                    <div className='icon-parent'>
                        <NotificationsNoneIcon className='notification-icon' />
                        <span className='notification-badge'>2</span>
                    </div>
                    <div className='icon-parent'>
                        <PeopleAltOutlinedIcon className='people-icon' />
                    </div>
                    <Avatar className='header__avatar' src={avatar} alt='avatar' />
                </div>
            </div>
        </header>
    );
};

export default Header;