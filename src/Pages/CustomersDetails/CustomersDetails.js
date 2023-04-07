import React from 'react';
import { Link, useParams } from 'react-router-dom';

// MUI Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Avatar from '@mui/material/Avatar';

// Database
import { users } from '../../Database/database';

// Shared
import Button from '../../Components/Shared/Button/Button'

const CustomersDetails = () => {
    const params = useParams()

    let mainCustomers = users.find(customers => customers.id === Number(params.customersDetails))

    return (
        <div className='customers-details'>
            <div className='container'>
                <div className='customers-details-main'>
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
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='shadow-c'>
                                <h3 className='components-title'>Basic Details</h3>
                                <div className='customers-details-basic'>
                                    <div className='customers-details-info'>
                                        <div className='customers-details-account pt-0'>
                                            <h4 className='customers-details__label'>Email</h4>
                                            <p className='customers-details__desc'>{mainCustomers.email}</p>
                                        </div>
                                        <div className='customers-details-account'>
                                            <h4 className='customers-details__label'>Phone</h4>
                                            <p className='customers-details__desc'>{mainCustomers.phone}</p>
                                        </div>
                                        <div className='customers-details-account'>
                                            <h4 className='customers-details__label'>Address</h4>
                                            <p className='customers-details__desc'>{mainCustomers.location}</p>
                                        </div>
                                        <div className='customers-details-account border-none pb-0'>
                                            <h4 className='customers-details__label'>Credit Cart</h4>
                                            <p className='customers-details__desc'>{mainCustomers.cart}</p>
                                        </div>
                                    </div>
                                    <Button text='Reset Password' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersDetails;