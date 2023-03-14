import React from 'react';

// Img
import glassChart from '../../Assets/Images/icon/iconly-glass-chart.svg'
import glassDiscount from '../../Assets/Images/icon/iconly-glass-discount.svg'
import glassTick from '../../Assets/Images/icon/iconly-glass-tick.svg'

// Database
import {sellingProducts} from '../../Database/database'

// Shared
import Button from '../../Components/Shared/Button/Button'

const ECommerce = () => {
    return (
        <div className='ecommerce'>
            <div className='container'>
                <h3 className='components-name'>E-Commerce</h3>
                <div className='ecommerce-main'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='col-12'>
                                <div className='ecommerce-status shadow-c'>
                                    <h3 className='components-title'>Today's Stats</h3>
                                    <div className='ecommerce-today-status'>
                                        <div className='tasks-head pink b-radius'>
                                            <img src={glassChart} alt='done' className='tasks__icon' />
                                            <div className='tasks-content'>
                                                <p className='tasks__name'>Sales</p>
                                                <h3 className='tasks__score font-23'>$152K</h3>
                                            </div>
                                        </div>
                                        <div className='tasks-head orange b-radius'>
                                            <img src={glassDiscount} alt='done' className='tasks__icon' />
                                            <div className='tasks-content'>
                                                <p className='tasks__name'>Cost</p>
                                                <h3 className='tasks__score font-23'>$77.7K</h3>
                                            </div>
                                        </div>
                                        <div className='tasks-head green b-radius'>
                                            <img src={glassTick} alt='done' className='tasks__icon' />
                                            <div className='tasks-content'>
                                                <p className='tasks__name'>Profit</p>
                                                <h3 className='tasks__score font-23'>$32.2K</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='shadow-c'>
                                <div className='inbox'>
                                    <h3 className='components-title'>Top Selling Products</h3>
                                    {sellingProducts.map(product => (
                                        <div className='inbox-users' key={product.id}>
                                            <div className='align-center'>
                                                <div className='inbox-product-img'>
                                                    <img src={product.img} alt='product' />
                                                </div>
                                                <div className='inbox-userinfo'>
                                                    <h4 className='inbox-name'>{product.name}</h4>
                                                    <p className='inbox-desc'>{product.category}</p>
                                                </div>
                                            </div>
                                            <div className='inbox-rate'>
                                                <h6>#{product.id}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button text='See All' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECommerce;