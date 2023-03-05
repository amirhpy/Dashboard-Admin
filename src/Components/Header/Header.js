import React from 'react';

// MUI Icon
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import Avatar from '@mui/material/Avatar';

// Image
import avatar from '../../Assets/Images/avatar/avatar-anika-visser.png'

// Modal
import Modal from '../Shared/Modal/Modal'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='header-search icon-parent'>
                    <Modal />
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