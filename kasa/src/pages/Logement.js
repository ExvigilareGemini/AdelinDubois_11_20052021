import React from 'react';
import Carrousel from '../components/Carrousel';
import InformationPanel from '../components/InformationPanel';
import Dropdown from '../components/Dropdown';
import {Redirect} from 'react-router';
import {propertyForSellDatas} from '../data/data';
import '../styles/pages/Logement.css';



class Logement extends React.Component {

    

    render() {      
        const actualHouse = propertyForSellDatas.find(property => property.id === this.props.match.params.id);
        // check if id in URL is inside the json to render logement or error
        return !propertyForSellDatas.some(property => property.id === this.props.match.params.id) ? <Redirect to="/NoMatchedId" /> : 
                    <div className="main">
                        <Carrousel housePictures={actualHouse.pictures} />
                        <InformationPanel title={actualHouse.title} location={actualHouse.location} tags={actualHouse.tags} rating={actualHouse.rating} vendor={actualHouse.host} />
                        <div className="dropdownContainer">
                            <Dropdown name="Description" houseObject={actualHouse} toDisplay={actualHouse.description} />
                            <Dropdown name="Equipements" houseObject={actualHouse} toDisplay={actualHouse.equipments} />
                        </div>

                    </div>
                    
    }
}

export default Logement;