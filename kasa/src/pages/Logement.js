import React from 'react';
import {Redirect} from 'react-router';
import {propertyForSellDatas} from '../data/data';

class Logement extends React.Component {

    render() {      
        // check if id in URL is inside the json to render logement or error
        return propertyForSellDatas.some(a => a.id === this.props.match.params.id) ? <h1>Logement</h1> : <Redirect to="/NoMatchedId" />;
    }
}

export default Logement;