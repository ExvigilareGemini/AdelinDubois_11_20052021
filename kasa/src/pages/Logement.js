import React from 'react';
import Dropdown from '../components/Dropdown'
import {Redirect} from 'react-router';
import {propertyForSellDatas} from '../data/data';
import ArrowDown from '../img/ArrowDownIcon.svg'

class Logement extends React.Component {

    

    render() {      
        // check if id in URL is inside the json to render logement or error
        return !propertyForSellDatas.some(property => property.id === this.props.match.params.id) ? <Redirect to="/NoMatchedId" /> : 
                    <div>
                        <h1>Logement</h1> 
                        <Dropdown name="Equipements" icon={ArrowDown} houseObject={propertyForSellDatas.find(property => property.id === this.props.match.params.id)} />
                    </div>
                    
    }
}

export default Logement;