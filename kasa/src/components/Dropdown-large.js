import React from 'react';
import '../styles/Dropdown.css';
import ArrowDown from '../img/ArrowDownIcon.svg';


class DropdownLarge extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        const dropOpen = this.state.isOpen;
        return (
                        <div className="dropdown large" >
                            <button className="dropdownButton large" onClick={ () => this.setState({isOpen: !dropOpen}) }>  
                                {this.props.name}   
                                <img className={dropOpen ? "rotated" : ""} src={ArrowDown} alt=""></img> 
                            </button>
                            <p className={dropOpen ? "dropdownMenu text large" : "dropdownMenu text large hidden"}>{this.props.text}</p>
                        </div>
                    
                )
    }
}

export default DropdownLarge;

