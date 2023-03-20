import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// database
import { products } from '../../Database/database';

// MUI DataGrid
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'

// MUI Icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const Products = () => {
    const [productsData] = useState(products)

    const columns = [
        {
            field: 'field',
            headerName: 'Name',
            width: 450,
            renderCell: (params) => {
                return (
                    <Link to='/'>
                        <div className='datagrid-users'>
                            <div className='datagrid-img-container'>
                                <img src={params.row.img} alt='products' />
                            </div>
                            <div className='datagrid-username-content'>
                                <p className='datagrid__name'>{params.row.name}</p>
                                <p className='datagrid__email'>{params.row.category}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            cellClassName: 'datagrid__cell-style',
            width: 150
        },
        {
            field: 'price',
            headerName: 'Price',
            cellClassName: 'datagrid__cell-style',
            width: 150
        },
        {
            field: 'sku',
            headerName: 'Sku',
            cellClassName: 'datagrid__cell-style',
            width: 150,
        },
        {
            field: 'status',
            headerName: 'Status',
            cellClassName: 'datagrid__cell-status',
            width: 150
        }
    ]

    return (
        <div className='products'>
            <div className='container'>
                <h3 className='components-name'>Products</h3>
                <Box sx={{ height: '40rem', width: '100%' }}>
                    <DataGrid
                        sx={{
                            color: '#2f3746',
                            fontSize: '1.2rem',
                            fontFamily: 'inter-semibold'
                        }}
                        className='shadow-c'
                        autoHeight
                        rows={productsData}
                        columns={columns}
                        rowHeight={100}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 3,
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

export default Products;