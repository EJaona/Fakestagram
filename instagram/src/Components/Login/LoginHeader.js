import React from 'react';
import HeaderLogo from '../SearchBar/HeaderLogo'

const LoginHeader = () => {
    return (
        <div className="login-header">
            <span className="login-logo">
                <HeaderLogo />
            </span>
            <i className="fa fa-user fa-2x user" />
        </div>
    )
}

export default LoginHeader;