import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '.8rem',
    p: '3.2rem',
};

const inputstyle = {
    padding: '1.5rem 1rem',
    border: 'none',
    outline: 'none',
    borderRadius: '.8rem',
    border: 'solid .1rem rgb(229, 231, 235)',
    width: '100%'
}

export default function TransitionsModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <SearchIcon onClick={handleOpen} className='header__search-icon' />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className='modal-container'>
                        <Typography style={{
                            color: '#111927',
                            fontSize: '1.7rem',
                            fontFamily: 'jakart',
                            fontWeight: '700'
                        }} id="transition-modal-title" variant="h6" component="h2">
                            Search
                        </Typography>
                        <div style={{
                            backgroundColor: 'rgb(243, 244, 246)',
                            padding: '1rem',
                            marginTop: '2rem'
                        }}>
                            <Typography style={{
                                color: 'rgb(108, 115, 127)',
                                fontSize: '1.2rem',
                                fontFamily: 'inter',
                                fontWeight: '500',
                                margin: '0'
                            }} id="transition-modal-description" sx={{ mt: 2 }}>
                                Tip.Search by entering a keyword and pressing Enter
                            </Typography>
                        </div>
                        <div style={{marginTop: '2.5rem'}}>
                            <input style={inputstyle} placeholder='Search' />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
