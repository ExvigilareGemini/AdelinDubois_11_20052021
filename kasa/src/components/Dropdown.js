import React from 'react';
import '../styles/Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownState = false;
    }

    toggleDropdown() {
        console.log(this.dropdownState)
        this.dropdownState === false ? this.dropdownState = true : this.dropdownState = false;
    }

    render() {
        return (
                        <div className="dropdown" >
                            <button className="dropdownButton" onClick={this.toggleDropdown.bind(this)}> {this.props.name}  <img src={this.props.icon} alt=""></img> </button>
                            <ul className="dropdownMenu">
                                {this.props.houseObject.equipments.map((equipement) => {
                                    return <li key={equipement + this.props.houseObject.id} className="dropdownItem"> {equipement} </li>
                                })}
                            </ul>
                        </div>
                    
                )
    }
}

export default Dropdown;

