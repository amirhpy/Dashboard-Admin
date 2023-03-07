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
                        <Typography className='modal__name' id="transition-modal-title" variant="h6" component="h2">
                            Search
                        </Typography>
                        <div className='modal-alert-parent'>
                            <Typography className='modal__alert' id="transition-modal-description" sx={{ mt: 2 }}>
                                Tip.Search by entering a keyword and pressing Enter
                            </Typography>
                        </div>
                        <div className='modal-input-parent'>
                            <input className='modal__input' placeholder='Search' />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
