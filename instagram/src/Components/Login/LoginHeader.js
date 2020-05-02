import React from 'react';
import HeaderLogo from '../SearchBar/HeaderLogo'

const LoginHeader = () => {
    return (
        <div className="login-header">
            <HeaderLogo />
            {/* <i className="fa fa-user fa-2x user" /> */}
        <div className="user">
            <i className="fa fa-user fa-2x user" />
            <p>Sign up</p>
        </div>
        </div>
    )
}

export default LoginHeader;