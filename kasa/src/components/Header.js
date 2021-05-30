import React from 'react';
import Navigation from './Navigation';
import Logo from '../img/LOGOHeader.svg';
import '../styles/components/Header.css';

class Header extends React.Component {
    render() {
                return (
                        <div className="header" >
                            <img src={Logo} alt="Kasa logo" className="headerLogo"></img>
                            <Navigation />
                        </div>
                    
                )
    }
}

export default Header;