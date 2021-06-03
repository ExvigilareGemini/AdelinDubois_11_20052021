import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/pages/Error404.css';

class Error404 extends React.Component {
    render() {
        return  <div className="main">
                    <div className="errorContainer">
                        <h1 className="errorTitle">404</h1>
                        <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
                        <Link to="/">
                            <p className="errorLink">Retourner sur la page d'acceuil</p>
                        </Link>
                    </div>
                </div>
            
    }
}

export default Error404;