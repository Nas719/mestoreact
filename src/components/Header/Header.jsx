import React from 'react';
import vectorLogoPath from '../../images/vector-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={vectorLogoPath} alt="Логотип"/>
        </header>
    );
};

export default Header;