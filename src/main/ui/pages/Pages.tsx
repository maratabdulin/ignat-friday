import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Registration from './Registration/Registration';
import Profile from './Profile/Profile';
import PasswordRecovery from './Password/PasswordRecovery';
import PasswordNew from './Password/PasswordNew';
import Test from './Test/Test';
import Error404 from './Error404/Error404';
import Login from './Login/Login';
import style from './Pages.module.scss';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    ERROR_404: '/notFound',
    PASSWORD_RECOVERY: '/password-recovery',
    PASSWORD_NEW: '/password-new',
    TEST: '/test',
}

const Pages = () => (
    <div className={style.wrapper}>
        <Routes>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.PASSWORD_NEW} element={<PasswordNew/>}/>
            <Route path={PATH.TEST} element={<Test/>}/>
            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    </div>
);

export default Pages
