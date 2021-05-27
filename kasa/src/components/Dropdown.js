import React from 'react';
import '../styles/Dropdown.css';

class Dropdown extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        const dropOpen = this.state.isOpen;
        return (
                        <div className="dropdown" >
                            <button className="dropdownButton" onClick={ () => this.setState({isOpen: !dropOpen}) }>  
                                {this.props.name}   
                                <img className={dropOpen ? "rotated" : ""} src={this.props.icon} alt=""></img> 
                            </button>
                            <ul className={dropOpen ? "dropdownMenu" : "dropdownMenu hidden"}>
                                {this.props.houseObject.equipments.map((equipement) => {
                                    return <li key={equipement + this.props.houseObject.id} className="dropdownItem"> {equipement} </li>
                                })}
                            </ul>
                        </div>
                    
                )
    }
}

export default Dropdown;
