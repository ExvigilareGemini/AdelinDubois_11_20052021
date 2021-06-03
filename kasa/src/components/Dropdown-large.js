import React from 'react';
import '../styles/components/Dropdown.css';
import ArrowDown from '../img/ArrowDownIcon.svg';


class DropdownLarge extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        const dropOpen = this.state.isOpen;
        return (
                        <div className="dropdownLarge" >
                            <button className="dropdownButton" onClick={ () => this.setState({isOpen: !dropOpen}) }>  
                                {this.props.name}   
                                <img className={dropOpen ? " arrow rotated" : "arrow"} src={ArrowDown} alt=""></img> 
                            </button>
                            <p className={dropOpen ? "dropdownMenu" : "dropdownMenu hidden"}>{this.props.text}</p>
                        </div>
                    
                )
    }
}

export default DropdownLarge;

