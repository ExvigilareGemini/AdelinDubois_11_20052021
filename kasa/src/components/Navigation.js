import React from 'react'
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return <nav>
                   <ul>
                       <Link to="/">
                           <li>Acceuil</li>
                       </Link>
           
                       <Link to="APropos">
                           <li>A propos</li>
                       </Link>
           
                   </ul>
               </nav>
    }
}

export default Navigation;