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
                    <Link to={`/customers/customersdetails/${params.row.id}`}>
                        <div className='datagrid-users'>
                            <Avatar src={params.row.profile} alt='profile' />
                            <div className='datagrid-username-content'>
                                <p className='datagrid__name'>{params.row.name}</p>
                                <p className='datagrid__email'>{params.row.email}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'location',
            headerName: 'Location',
            cellClassName: 'datagrid__cell-style',
            width: 250
        },
        {
            field: 'orders',
            headerName: 'Orders',
            cellClassName: 'datagrid__cell-style',
            width: 150
        },
        {
            field: 'spent',
            headerName: 'Spent',
            cellClassName: 'datagrid__cell-style',
            width: 150
        },
        {
            field: 'action',
            headerName: 'Actions',
            cellClassName: 'datagrid__cell-style',
            width: 80,
            renderCell: (params) => {
                return (
                    <div className='datagrid__actions'>
                        <Link to={`/customers/${params.row.id}`}>
                            <ModeEditOutlineOutlinedIcon />
                        </Link>
                        <Link to={`/customers/customersdetails/${params.row.id}`}>
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
                        rowHeight={70}
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