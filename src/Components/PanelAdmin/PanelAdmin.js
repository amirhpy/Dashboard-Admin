import React from 'react';
import { NavLink } from 'react-router-dom'

// Components
import Concepts from '../Concepts/Concepts';

const PanelAdmin = () => {
    return (
        <section className='panel-admin'>
            <div className='panel-devias'>
                <div className='panel-logo-parent'>
                    <svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.16" d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z" fill="#6366F1">
                        </path>
                        <path d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z" fill="#6366F1">
                        </path>
                    </svg>
                </div>
                <div className='panel-devias-info'>
                    <h3 className='panel__devias-name'>Devias</h3>
                    <p className='panel__devias-desc'>Production</p>
                </div>
            </div>
            <ul className='panel-menu'>
                <NavLink to='/overview' className={(link) => link.isActive ? 'panel__item--active' : ''}>
                    <li className='panel__item mt-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path fill="currentColor" d="M3 10.5651c0-.5744 0-.8616.074-1.126a1.9998 1.9998 0 0 1 .318-.6502c.1633-.2208.39-.3971.8434-.7498l6.7823-5.2751c.3513-.2732.527-.4099.721-.4624a.9996.9996 0 0 1 .5226 0c.194.0525.3697.1891.721.4624l6.7823 5.2751c.4534.3527.6801.529.8434.7498.1446.1955.2524.4159.318.6502.074.2644.074.5516.074 1.126V17.8c0 1.1201 0 1.6801-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4801 3 18.9201 3 17.8v-7.2349Z" opacity="0.12">
                            </path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.126 14c.444 1.7252 2.0102 3 3.874 3s3.4299-1.2748 3.874-3M11.0177 2.764 4.2354 8.0391c-.4534.3527-.68.529-.8434.7498a1.9998 1.9998 0 0 0-.318.6502C3 9.7035 3 9.9907 3 10.565V17.8c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4801 21 18.9201 21 17.8v-7.2349c0-.5744 0-.8616-.074-1.126a2.0016 2.0016 0 0 0-.318-.6502c-.1633-.2208-.39-.3971-.8434-.7498L12.9823 2.764c-.3513-.2732-.527-.4099-.721-.4624a.9996.9996 0 0 0-.5226 0c-.194.0525-.3697.1891-.721.4624Z">
                            </path>
                        </svg>
                        <p className='panel__item-txt'>Overview</p>
                    </li>
                </NavLink>

                <li className='panel__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="currentColor" d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z" opacity="0.12">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15v2m4-6v6m4-10v10m-8.2 4h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z">
                        </path>
                    </svg>
                    <p className='panel__item-txt'>Analytics</p>
                </li>
                <li className='panel__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="currentColor" d="M7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V9l-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15v1.2c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z" opacity="0.12">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 9-6.4485 4.6061c-.196.1399-.2939.2099-.3988.231a.4996.4996 0 0 1-.2765-.0229c-.1-.038-.1852-.1232-.3554-.2934l-3.0416-3.0416c-.1702-.1702-.2554-.2554-.3554-.2934a.4996.4996 0 0 0-.2765-.0229c-.1049.0211-.2028.0911-.3988.231L3 15m4.8 6h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z">
                        </path>
                    </svg>
                    <p className='panel__item-txt'>E-Commerce</p>
                </li>
                <li className='panel__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="currentColor" d="M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10Z" opacity="0.12">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 7.5h4.25C14.9926 7.5 16 8.5074 16 9.75S14.9926 12 13.75 12H9.5h4.75c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H9.5m0-9H8m1.5 0v9m0 0H8M10 6v1.5m0 9V18m3-12v1.5m0 9V18m9-6c0 5.5228-4.4772 10-10 10-5.5229 0-10-4.4772-10-10C2 6.4771 6.4771 2 12 2c5.5228 0 10 4.4771 10 10Z">
                        </path>
                    </svg>
                    <p className='panel__item-txt'>Crypto</p>
                </li>
                <li className='panel__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path fill="currentColor" d="M3 10.5651c0-.5744 0-.8616.074-1.126a1.9998 1.9998 0 0 1 .318-.6502c.1633-.2208.39-.3971.8434-.7498l6.7823-5.2751c.3513-.2732.527-.4099.721-.4624a.9996.9996 0 0 1 .5226 0c.194.0525.3697.1891.721.4624l6.7823 5.2751c.4534.3527.6801.529.8434.7498.1446.1955.2524.4159.318.6502.074.2644.074.5516.074 1.126V17.8c0 1.1201 0 1.6801-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4801 3 18.9201 3 17.8v-7.2349Z" opacity="0.12">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.126 14c.444 1.7252 2.0102 3 3.874 3s3.4299-1.2748 3.874-3M11.0177 2.764 4.2354 8.0391c-.4534.3527-.68.529-.8434.7498a1.9998 1.9998 0 0 0-.318.6502C3 9.7035 3 9.9907 3 10.565V17.8c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4801 21 18.9201 21 17.8v-7.2349c0-.5744 0-.8616-.074-1.126a2.0016 2.0016 0 0 0-.318-.6502c-.1633-.2208-.39-.3971-.8434-.7498L12.9823 2.764c-.3513-.2732-.527-.4099-.721-.4624a.9996.9996 0 0 0-.5226 0c-.194.0525-.3697.1891-.721.4624Z">
                        </path>
                    </svg>
                    <p className='panel__item-txt'>Account</p>
                </li>
            </ul>
            <Concepts />
        </section>
    );
};

export default PanelAdmin;