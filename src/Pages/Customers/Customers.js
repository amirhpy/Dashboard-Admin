import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// database
import { users } from '../../Database/database';

// MUI DataGrid
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

// MUI Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const Customers = () => {
    const [usersData] = useState(users)

    const columns = [
        {
            field: 'field',
            headerName: 'Name',
            width: 300,
            renderCell: (params) => {
                return (
                    <Link to='/'>
                        <div className='customers-users'>
                            <Avatar src={params.row.profile} alt='profile' />
                            <div className='customers-username-content'>
                                <p className='customers__name'>{params.row.name}</p>
                                <p className='customers__email'>{params.row.email}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'location',
            headerName: 'Location',
            cellClassName: 'customers__cell-style',
            width: 250
        },
        {
            field: 'orders',
            headerName: 'Orders',
            cellClassName: 'customers__cell-style',
            width: 150
        },
        {
            field: 'spent',
            headerName: 'Spent',
            cellClassName: 'customers__cell-style',
            width: 150
        },
        {
            field: 'action',
            headerName: 'Actions',
            cellClassName: 'customers__cell-style',
            width: 80,
            renderCell: (params) => {
                return (
                    <div className='customers__actions'>
                        <Link to='/'>
                            <ModeEditOutlineOutlinedIcon />
                        </Link>
                        <Link to='/'>
                            <ArrowForwardIcon />
                        </Link>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='customers'>
            <div className='container'>
                <h3 className='components-name'>Customers</h3>
                <Box sx={{ height: '40rem', width: '100%' }}>
                    <DataGrid
                        sx={{
                            color: '#2f3746',
                            fontSize: '1.2rem',
                            fontFamily: 'inter-semibold'
                        }}
                        className='shadow-c'
                        autoHeight
                        rows={usersData}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    );
};

export default Customers;