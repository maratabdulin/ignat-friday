import React from 'react';
import style from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import {PATH} from '../pages/Pages';

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <NavLink to={PATH.PROFILE} className={style.navLink}>Profile</NavLink>
            <NavLink to={PATH.LOGIN} className={style.navLink}>Login</NavLink>
            <NavLink to={PATH.PASSWORD_NEW} className={style.navLink}>New Password</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY} className={style.navLink}>Recovery Passport</NavLink>
            <NavLink to={PATH.REGISTRATION} className={style.navLink}>Registration</NavLink>
            <NavLink to={PATH.TEST} className={style.navLink}>Test</NavLink>
        </div>
    );
};

export default Header;
