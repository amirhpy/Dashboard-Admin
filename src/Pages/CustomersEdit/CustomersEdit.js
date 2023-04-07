import React from 'react';
import { Link, useParams } from 'react-router-dom';

// MUI Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Avatar from '@mui/material/Avatar';

// Database
import { users } from '../../Database/database';

const CustomersEdit = () => {
    const params = useParams()

    let mainCustomers = users.find(customers => customers.id === Number(params.customersEdit))

    return (
        <div className='customers-edit'>
            <div className='container'>
                <div className='customers-edit-main'>
                    <Link to='/customers' className='customers-edit-link'>
                        <ArrowBackIcon className='customers-edit-back' />
                        <h4>Customers</h4>
                    </Link>
                    <div className='customers-edit-profile'>
                        <Avatar sx={{ width: 60, height: 60 }} src={mainCustomers.profile} alt='profile' className='customers-edit__img' />
                        <div className='customers-edit-data'>
                            <h3 className='components-name m-0'>{mainCustomers.email}</h3>
                            <p className='customers-edit-user customers-edit-link'>user_id:<span className='customers-edit-id'>{mainCustomers.uuid}</span></p>
                        </div>
                    </div>
                    <div className='shadow-c'>
                        <h3 className='components-title'>Edit Customers</h3>
                        <div className='customers-edit-inputs'>
                            <div class="input-container">
                                <input placeholder="Full name" type="text" class="input" />
                                <span>Full name</span>
                            </div>
                            <div class="input-container">
                                <input placeholder="Email address" type="text" class="input" />
                                <span>@gmail.com</span>
                            </div>
                            <div class="input-container">
                                <input placeholder="Address" type="text" class="input" />
                                <span>Address</span>
                            </div>
                            <div class="input-container">
                                <input placeholder="Phone number" type="text" class="input" />
                                <span>Phone number</span>
                            </div>
                        </div>
                        <div className='customers-edit-btn'>
                            <button className=''>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersEdit;