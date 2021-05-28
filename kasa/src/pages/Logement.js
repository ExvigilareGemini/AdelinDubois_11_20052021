import React from 'react';
import Dropdown from '../components/Dropdown';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import {Redirect} from 'react-router';
import {propertyForSellDatas} from '../data/data';



class Logement extends React.Component {

    

    render() {      
        const actualHouse = propertyForSellDatas.find(property => property.id === this.props.match.params.id);
        // check if id in URL is inside the json to render logement or error
        return !propertyForSellDatas.some(property => property.id === this.props.match.params.id) ? <Redirect to="/NoMatchedId" /> : 
                    <div>
                        <h1>Logement</h1> 
                        <Carrousel housePictures={actualHouse.pictures} />
                        {actualHouse.tags.map((tagText) => {
                            return  <Tag text={tagText} />
                        })}
                        <Dropdown name="Equipements" houseObject={actualHouse} />
                    </div>
                    
    }
}

export default Logement;