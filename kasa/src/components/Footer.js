import React from 'react';
import '../styles/Footer.css';
import Logo from '../img/LOGO.svg'

class Footer extends React.Component {
    render() {
                return (
                        <div className="footer" >
                            <img src={Logo} alt="Kasa logo" className="footerLogo"></img>
                            <p className="footerText">© 2020 Kasa. All rights reserved</p>
                        </div>
                    
                )
    }
}

export default Footer;