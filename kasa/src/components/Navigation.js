import React from 'react'
import {NavLink} from 'react-router-dom';
import '../styles/components/Navigation.css';

class Navigation extends React.Component {
    render() {
        return <nav className="navigation">
                   <ul className="navigationList">
                       <NavLink exact to="/">
                           <li className="navigationNavLink">Acceuil</li>
                       </NavLink>
           
                       <NavLink exact to="/APropos">
                           <li className="navigationNavLink">A propos</li>
                       </NavLink>
           
                   </ul>
               </nav>
    }
}

export default Navigation;