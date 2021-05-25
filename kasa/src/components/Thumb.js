import React from 'react';
import '../styles/Thumb.css';
import {Link} from 'react-router-dom';

class Thumb extends React.Component {
    render() {
                return (
                        <div className="thumb" key={this.props.id} >
                            <Link to={"Logement/" + this.props.id}>
                            <div className="thumbTransparentEffect"></div>
                            <img className="thumbImage" src={this.props.cover} alt="Présentation du lieu"></img>
                            <p className="thumbTitle">{this.props.title}</p>
                            </Link>
                        </div>
                    
                )
    }
}

export default Thumb;