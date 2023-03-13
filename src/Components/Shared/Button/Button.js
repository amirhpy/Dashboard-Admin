import React from 'react';

// Mui Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Button = ({ text }) => {
    return (
        <div className='btn-container'>
            <div className='btn-hover'>
                <p className='btn-txt'>{text}</p>
                <ArrowForwardIcon />
            </div>
        </div>
    );
};

export default Button;